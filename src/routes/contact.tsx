import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { runGraceScripts } from "@/lib/grace-scripts";

const HTML = "<header class=\"site-header\">\n  <div class=\"header-inner\">\n    <a href=\"/\" class=\"logo-link\" aria-label=\"Grace Collection\">\n      <img src=\"/assets/img/brand/logo-horizontal.png?v=3\" alt=\"Grace Collection\" class=\"logo-img\">\n    </a>\n    <nav class=\"nav\">\n      <a href=\"/\">Home</a>\n      <div class=\"nav-item nav-item--has-menu\">\n        <button class=\"nav-trigger\" type=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\">Villas <span class=\"caret\" aria-hidden=\"true\">\u25be</span></button>\n        <div class=\"nav-menu\">\n          <a href=\"/azure\"><span class=\"nav-menu-name\">Villa Azure</span><span class=\"nav-menu-sub\">The Contemporary \u00b7 7 suites</span></a>\n          <a href=\"/paradiso\"><span class=\"nav-menu-name\">Villa Paradiso</span><span class=\"nav-menu-sub\">The Classic \u00b7 9 suites</span></a>\n          <a href=\"/#both\" class=\"nav-menu-foot\">Book both villas \u2192</a>\n        </div>\n      </div>\n      <a href=\"/experiences\">Experiences</a>\n      <a href=\"/weddings\">Weddings</a>\n      <a href=\"/corporate\">Corporate</a>\n      <a href=\"/faq\">FAQ</a>\n      <a href=\"/contact\" class=\"active\">Contact</a>\n      <a href=\"https://villaazurevillaparadiso.guestybookings.com\" target=\"_blank\" rel=\"noopener\" class=\"btn btn-light\">Reserve</a>\n    </nav>\n    <button class=\"menu-btn\" aria-label=\"Open menu\">\n      <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"><path d=\"M3 6h18M3 12h18M3 18h18\"/></svg>\n    </button>\n  </div>\n</header>\n\n<!-- Hero -->\n<section class=\"villa-hero\" id=\"top\">\n  <div class=\"hero-media\">\n    <img src=\"/assets/img/azure/2025/02/193a39ec.webp\" alt=\"Ocean Park beach at sunset\">\n  </div>\n  <div class=\"hero-inner\">\n    <span class=\"eyebrow hero-eyebrow\">Contact \u00b7 Grace Collection</span>\n    <h1>Let&rsquo;s plan your <em>Caribbean escape.</em></h1>\n    <p class=\"lede\">Whether you&rsquo;re booking a getaway, planning a wedding, or coordinating a corporate retreat \u2014 our team is here to help across both villas, with one point of contact for the whole stay.</p>\n    <div class=\"hero-cta\">\n      <a href=\"#form\" class=\"btn btn-fill\">Send a Message <span class=\"arrow\">\u2192</span></a>\n      <a href=\"tel:+19549001988\" class=\"btn btn-light\">Call Villa Azure</a>\n    </div>\n  </div>\n</section>\n\n<!-- Quick contact cards -->\n<section class=\"section section-cream\">\n  <div class=\"container\">\n    <div class=\"section-head fade-up\">\n      <span class=\"eyebrow\"><span class=\"rule\"></span>Reach Out Directly<span class=\"rule\"></span></span>\n      <h2>One team, two villas.</h2>\n      <p>Speak with the property team for the villa you&rsquo;re interested in \u2014 or send a general inquiry and we&rsquo;ll route it for you.</p>\n    </div>\n    <div class=\"contact-cards\">\n      <article class=\"contact-card fade-up\">\n        <span class=\"contact-tag\">The Contemporary</span>\n        <h3>Villa Azure</h3>\n        <p class=\"contact-sub\">7 suites \u00b7 Up to 16 guests \u00b7 Ocean Park, San Juan</p>\n        <ul class=\"contact-list\">\n          <li>\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"><path d=\"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z\"/></svg>\n            <a href=\"tel:+19549001988\">+1 (954) 900-1988</a>\n          </li>\n          <li>\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"><path d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\"/><path d=\"M22 6l-10 7L2 6\"/></svg>\n            <a href=\"mailto:info@villaazurepr.com\">info@villaazurepr.com</a>\n          </li>\n          <li>\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"><path d=\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/></svg>\n            <span>5 C. Guerrero Noble<br>San Juan, PR 00913</span>\n          </li>\n        </ul>\n        <div class=\"contact-card-cta\">\n          <a href=\"/azure\" class=\"btn btn-dark\">See Villa Azure <span class=\"arrow\">\u2192</span></a>\n          <a href=\"https://villaazurehotelpr.com/\" target=\"_blank\" rel=\"noopener\" class=\"btn btn-fill\">Visit Site <span class=\"arrow\">\u2197</span></a>\n        </div>\n      </article>\n\n      <article class=\"contact-card fade-up\">\n        <span class=\"contact-tag\">The Classic</span>\n        <h3>Villa Paradiso</h3>\n        <p class=\"contact-sub\">9 bedrooms \u00b7 9 en-suite bathrooms \u00b7 Garden Pavilion \u00b7 Ocean Park, San Juan</p>\n        <ul class=\"contact-list\">\n          <li>\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"><path d=\"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z\"/></svg>\n            <a href=\"tel:+19549001988\">+1 (954) 900-1988</a>\n          </li>\n          <li>\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"><path d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\"/><path d=\"M22 6l-10 7L2 6\"/></svg>\n            <a href=\"mailto:info@villaparadisopr.com\">info@villaparadisopr.com</a>\n          </li>\n          <li>\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"><path d=\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/></svg>\n            <span>1 Calle Guerrero Noble<br>San Juan, PR 00913</span>\n          </li>\n        </ul>\n        <div class=\"contact-card-cta\">\n          <a href=\"/paradiso\" class=\"btn btn-dark\">See Villa Paradiso <span class=\"arrow\">\u2192</span></a>\n          <a href=\"https://villaparadisopr.com/\" target=\"_blank\" rel=\"noopener\" class=\"btn btn-fill\">Visit Site <span class=\"arrow\">\u2197</span></a>\n        </div>\n      </article>\n    </div>\n  </div>\n</section>\n\n<!-- Form -->\n<section class=\"section\" id=\"form\">\n  <div class=\"container\">\n    <div class=\"contact-form-grid\">\n      <div class=\"fade-up\">\n        <span class=\"eyebrow\">General Inquiry</span>\n        <h2>Send us a message.</h2>\n        <p>Tell us what you&rsquo;re planning \u2014 stay, wedding, corporate retreat, or full-collection buyout \u2014 and we&rsquo;ll get back within one business day.</p>\n        <ul class=\"contact-quick\">\n          <li><strong>Response time</strong><span>Within 24 hours, usually same day</span></li>\n          <li><strong>Languages</strong><span>English &middot; Espa\u00f1ol &middot; Fran\u00e7ais</span></li>\n          <li><strong>Best for</strong><span>Date checks, group quotes, event planning, concierge questions</span></li>\n        </ul>\n      </div>\n      <form class=\"contact-form fade-up\" id=\"graceContactForm\" novalidate>\n        <div class=\"field\">\n          <label for=\"c-name\">Full Name</label>\n          <input type=\"text\" id=\"c-name\" name=\"name\" required>\n        </div>\n        <div class=\"field-row\">\n          <div class=\"field\">\n            <label for=\"c-email\">Email</label>\n            <input type=\"email\" id=\"c-email\" name=\"email\" required>\n          </div>\n          <div class=\"field\">\n            <label for=\"c-phone\">Phone</label>\n            <input type=\"tel\" id=\"c-phone\" name=\"phone\">\n          </div>\n        </div>\n        <div class=\"field-row\">\n          <div class=\"field\">\n            <label for=\"c-villa\">Villa of Interest</label>\n            <select id=\"c-villa\" name=\"villa\">\n              <option>Either / Not sure yet</option>\n              <option>Villa Azure</option>\n              <option>Villa Paradiso</option>\n              <option>Both \u2014 full collection buyout</option>\n            </select>\n          </div>\n          <div class=\"field\">\n            <label for=\"c-purpose\">Purpose</label>\n            <select id=\"c-purpose\" name=\"purpose\">\n              <option>Stay</option>\n              <option>Wedding</option>\n              <option>Corporate retreat</option>\n              <option>Family gathering</option>\n              <option>Other</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"field-row\">\n          <div class=\"field\">\n            <label for=\"c-checkin\">Tentative Check-in</label>\n            <input type=\"date\" id=\"c-checkin\" name=\"check_in\">\n          </div>\n          <div class=\"field\">\n            <label for=\"c-checkout\">Tentative Check-out</label>\n            <input type=\"date\" id=\"c-checkout\" name=\"check_out\">\n          </div>\n        </div>\n        <div class=\"field\">\n          <label for=\"c-guests\">Estimated Guests</label>\n          <input type=\"text\" id=\"c-guests\" name=\"guests\" placeholder=\"e.g. 12 (or 45 for an event)\">\n        </div>\n        <div class=\"field\">\n          <label for=\"c-message\">Tell us about your plans</label>\n          <textarea id=\"c-message\" name=\"message\" rows=\"5\" placeholder=\"Anything we should know \u2014 dates, vision, must-haves\u2026\"></textarea>\n        </div>\n        <button type=\"submit\" class=\"btn btn-fill\" style=\"width:100%;justify-content:center\">Send Message <span class=\"arrow\">\u2192</span></button>\n        <p class=\"contact-fineprint\">We&rsquo;ll never share your information. Replies usually arrive same-day from our reservations team.</p>\n      </form>\n    </div>\n  </div>\n</section>\n\n<!-- Map / Location -->\n<section class=\"section section-cream\" id=\"map\">\n  <div class=\"container\">\n    <div class=\"section-head fade-up\">\n      <span class=\"eyebrow\"><span class=\"rule\"></span>Where to Find Us<span class=\"rule\"></span></span>\n      <h2>Ocean Park, San Juan.</h2>\n      <p>Both villas sit on the same block \u2014 Guerrero Noble, one minute from Ocean Park Beach.</p>\n    </div>\n    <div class=\"contact-map fade-up\">\n      <iframe\n        src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.2!2d-66.07!3d18.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c036f4e1a2b3c5d%3A0x1234567890abcdef!2s5+C.+Guerrero+Noble%2C+San+Juan%2C+00913%2C+Puerto+Rico!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus\"\n        width=\"100%\" height=\"450\" style=\"border:0;display:block\" allowfullscreen=\"\" loading=\"lazy\"></iframe>\n    </div>\n  </div>\n</section>\n\n<!-- Footer -->\n<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"footer-grid\">\n      <div class=\"footer-brand\">\n        <a href=\"/\" class=\"logo-link\" aria-label=\"Grace Collection\">\n          <img src=\"/assets/img/brand/logo-stacked.png?v=3\" alt=\"Grace Collection\" class=\"logo-img logo-img--stacked\">\n        </a>\n        <p>Two boutique villas on Ocean Park, San Juan \u2014 one place to compare, choose and reserve.</p>\n      </div>\n      <div>\n        <h4>Villa Azure</h4>\n        <ul>\n          <li>5 C. Guerrero Noble<br>San Juan, PR 00913</li>\n          <li><a href=\"tel:+19549001988\">+1 (954) 900-1988</a></li>\n          <li><a href=\"mailto:info@villaazurepr.com\">info@villaazurepr.com</a></li>\n          <li><a href=\"https://villaazurehotelpr.com/\" target=\"_blank\" rel=\"noopener\">villaazurehotelpr.com \u2197</a></li>\n        </ul>\n      </div>\n      <div>\n        <h4>Villa Paradiso</h4>\n        <ul>\n          <li>1 Calle Guerrero Noble<br>San Juan, PR 00913</li>\n          <li><a href=\"tel:+19549001988\">+1 (954) 900-1988</a></li>\n          <li><a href=\"mailto:info@villaparadisopr.com\">info@villaparadisopr.com</a></li>\n          <li><a href=\"https://villaparadisopr.com/\" target=\"_blank\" rel=\"noopener\">villaparadisopr.com \u2197</a></li>\n        </ul>\n      </div>\n      <div>\n        <h4>Collection</h4>\n        <ul>\n          <li><a href=\"/#properties\">The Villas</a></li>\n          <li><a href=\"/weddings\">Weddings</a></li>\n          <li><a href=\"/corporate\">Corporate</a></li>\n          <li><a href=\"/faq\">FAQ</a></li>\n          <li><a href=\"/contact\">Contact</a></li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"footer-bottom\">\n      <span>\u00a9 <span id=\"year\"></span> Grace Collection \u00b7 <span class=\"footer-location\">Ocean Park \u00b7 San Juan \u00b7 Puerto Rico</span></span>\n      <span>Est. 2026</span>\n    </div>\n  </div>\n</footer>";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Grace Collection | Villa Azure & Villa Paradiso, San Juan" },
      { name: "description", content: "Contact Grace Collection \u2014 Villa Azure and Villa Paradiso on Ocean Park, San Juan, Puerto Rico. Reservations, events, and concierge inquiries." },
      { property: "og:title", content: "Contact Grace Collection | Villa Azure & Villa Paradiso, San Juan" },
      { property: "og:description", content: "Contact Grace Collection \u2014 Villa Azure and Villa Paradiso on Ocean Park, San Juan, Puerto Rico. Reservations, events, and concierge inquiries." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://gracecollectionpr.com/contact" },
      { property: "og:image", content: "https://gracecollectionpr.com/assets/img/paradiso-real/exterior/villa-front.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact Grace Collection | Villa Azure & Villa Paradiso, San Juan" },
      { name: "twitter:description", content: "Contact Grace Collection \u2014 Villa Azure and Villa Paradiso on Ocean Park, San Juan, Puerto Rico. Reservations, events, and concierge inquiries." },
      { name: "twitter:image", content: "https://gracecollectionpr.com/assets/img/paradiso-real/exterior/villa-front.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://gracecollectionpr.com/contact" },
    ],
    scripts: [
      { type: "application/ld+json", children: "{\"@context\": \"https://schema.org\", \"@type\": \"ContactPage\", \"name\": \"Contact \\u2014 Grace Collection\", \"url\": \"https://gracecollectionpr.com/contact\"}" },
      { type: "application/ld+json", children: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://gracecollectionpr.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Contact\", \"item\": \"https://gracecollectionpr.com/contact\"}]}" },
    ],
  }),
  component: ContactPage,
});

// Enquiries go through the Villa Azure hotel site's contact endpoint, which
// emails them to villaazurepr@gmail.com and keeps a copy in its D1 table.
const CONTACT_ENDPOINT = "https://villaazurehotelpr.com/api/public/contact";

function wireContactForm(): () => void {
  const form = document.getElementById("graceContactForm") as HTMLFormElement | null;
  if (!form) return () => {};
  const onSubmit = async (e: Event) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
    const label = btn ? btn.innerHTML : "";
    const fd = new FormData(form);
    const val = (k: string) => (fd.get(k) || "").toString().trim();
    const purpose = val("purpose");
    const lines = [
      `Villa of interest: ${val("villa") || "-"}`,
      `Purpose: ${purpose || "-"}`,
      `Tentative check-in: ${val("check_in") || "-"}`,
      `Tentative check-out: ${val("check_out") || "-"}`,
      `Estimated guests: ${val("guests") || "-"}`,
      "",
      val("message") || "(no message)",
    ];
    if (btn) {
      btn.disabled = true;
      btn.textContent = "Sending\u2026";
    }
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: val("name"),
          email: val("email"),
          phone: val("phone"),
          subject: `Grace Collection website \u2014 ${purpose || "Enquiry"}`,
          message: lines.join("\n"),
          source: "gracecollectionpr.com/contact",
          locale: "en",
        }),
      });
      const out = await res.json().catch(() => ({}));
      if (!res.ok || !out.ok) throw new Error("send failed");
      form.reset();
      if (btn) {
        btn.textContent = "Message sent \u2014 we\u2019ll be in touch";
        btn.style.background = "#2a6f51";
      }
    } catch {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = label;
      }
      alert("Sorry, your message could not be sent. Please email info@villaazurepr.com or message us on WhatsApp.");
    }
  };
  form.addEventListener("submit", onSubmit);
  return () => form.removeEventListener("submit", onSubmit);
}

function ContactPage() {
  useEffect(() => {
    const cleanup = runGraceScripts();
    const unwire = wireContactForm();
    return () => {
      unwire();
      cleanup?.();
    };
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: HTML }} />;
}
