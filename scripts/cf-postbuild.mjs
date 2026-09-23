// Post-build step for the Cloudflare Worker deploy.
// 1. Names the Worker "grace-collection" (Nitro auto-names it after the repo).
// 2. Wraps the Nitro entry so the hero videos in /assets/video/ answer HTTP
//    Range requests with 206 Partial Content. Workers static assets return the
//    whole file as 200, and iPhone Safari will not play video without ranges.
// Run after `vite build`; `npm run deploy` does build + this + wrangler deploy.
import { readFileSync, writeFileSync } from "node:fs";

const dir = new URL("../.output/server/", import.meta.url);
const cfgPath = new URL("wrangler.json", dir);
const cfg = JSON.parse(readFileSync(cfgPath, "utf8"));
cfg.name = "grace-collection";
cfg.main = "range-entry.mjs";
cfg.assets = { ...cfg.assets, run_worker_first: ["/assets/video/*"] };
writeFileSync(cfgPath, JSON.stringify(cfg, null, 2));

writeFileSync(new URL("range-entry.mjs", dir), `import app from "./index.mjs";

const VIDEO = /^\\/assets\\/video\\/[^/]+\\.mp4$/;

async function serveVideo(req, env) {
  const url = new URL(req.url);
  const res = await env.ASSETS.fetch(new Request(url.toString(), { method: "GET" }));
  if (!res.ok) return res;
  const buf = await res.arrayBuffer();
  const size = buf.byteLength;
  const h = new Headers(res.headers);
  h.delete("content-encoding");
  h.set("accept-ranges", "bytes");
  h.set("cache-control", "public, max-age=86400");
  const head = req.method === "HEAD";
  const m = /^bytes=(\\d*)-(\\d*)$/.exec((req.headers.get("range") || "").trim());
  if (!m || (m[1] === "" && m[2] === "")) {
    h.set("content-length", String(size));
    return new Response(head ? null : buf, { status: 200, headers: h });
  }
  let start, end;
  if (m[1] === "") { start = Math.max(0, size - Number(m[2])); end = size - 1; }
  else { start = Number(m[1]); end = m[2] === "" ? size - 1 : Math.min(Number(m[2]), size - 1); }
  if (start >= size || start > end) {
    h.set("content-range", "bytes */" + size);
    h.delete("content-length");
    return new Response(null, { status: 416, headers: h });
  }
  h.set("content-range", "bytes " + start + "-" + end + "/" + size);
  h.set("content-length", String(end - start + 1));
  return new Response(head ? null : buf.slice(start, end + 1), { status: 206, headers: h });
}

export default {
  ...app,
  fetch(req, env, ctx) {
    const { pathname } = new URL(req.url);
    if ((req.method === "GET" || req.method === "HEAD") && VIDEO.test(pathname)) return serveVideo(req, env);
    return app.fetch(req, env, ctx);
  },
};
`);
console.log("cf-postbuild: wrangler.json patched (name=grace-collection, range wrapper for /assets/video/*)");
