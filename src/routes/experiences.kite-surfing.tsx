import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { runGraceScripts } from "@/lib/grace-scripts";
import { ExperienceTemplate, type ExperienceContent } from "@/lib/grace-chrome";

const data: ExperienceContent = {
  slug: "kite-surfing",
  name: "Kite Surfing",
  eyebrow: "Experiences · Grace Collection",
  tagline: "Ocean Park is one of Puerto Rico's best-known kiteboarding spots, with Villa Paradiso on the oceanfront and Villa Azure steps from the beach.",
  heroImage: "/assets/img/experiences/kitesurf-sunset.jpg",
  heroAlt: "Kitesurfing at Ocean Park Beach",
  intro:
    "Steady Atlantic trade winds, a shallow reef-protected bay, and warm water year-round make Ocean Park one of the top kiteboarding destinations in the Caribbean. Grace Collection's concierge arranges lessons, rentals, and downwinders with the beach's most trusted local schools — steps from your suite.",
  sections: [
    {
      title: "Lessons for every level.",
      body:
        "Never touched a kite? IKO-certified instructors will have you up and riding in a few sessions. Already independent? Book advanced coaching, gear tuning, or a downwinder along the north coast.",
      image: "/assets/img/experiences/kitesurf-launch.jpg",
      alt: "Ocean Park beachfront",
    },
    {
      title: "Rentals and storage on-site.",
      body:
        "Bring your own gear or rent from our partners. We coordinate delivery to the villa, storage between sessions, and rigging on the beach so you spend your time on the water — not with a pump.",
      image: "/assets/img/experiences/kitesurf-action.jpg",
      alt: "Villa Paradiso pool with ocean views",
    },
  ],
  offerings: [
    "Beginner Lessons — IKO-certified, 2–3 sessions to independent riding",
    "Advanced Coaching — Jumps, foil, wave riding, and video review",
    "Rentals & Gear — Kites, boards, harnesses, and safety equipment",
    "Downwinders — Coastal runs along the north shore, transport included",
  ],
  tags: "Steady trade winds, warm water, and the beach right outside your door.",
};

export const Route = createFileRoute("/experiences/kite-surfing")({
  head: () => ({
    meta: [
      { title: "Kitesurfing on Ocean Park, San Juan | Grace Collection" },
      { name: "description", content: "Kitesurf lessons, rentals, and downwinders on Ocean Park Beach — arranged by the concierge at Villa Azure & Villa Paradiso." },
      { property: "og:title", content: "Kitesurfing on Ocean Park, San Juan | Grace Collection" },
      { property: "og:description", content: "IKO-certified lessons, gear rentals, and downwinders on Ocean Park's famous kite beach." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://code-pal-post.lovable.app/experiences/kite-surfing" },
      { property: "og:image", content: "https://code-pal-post.lovable.app/assets/img/experiences/kitesurf-sunset.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Kitesurfing on Ocean Park, San Juan | Grace Collection" },
      { name: "twitter:description", content: "IKO-certified lessons, gear rentals, and downwinders on Ocean Park's famous kite beach." },
      { name: "twitter:image", content: "https://code-pal-post.lovable.app/assets/img/experiences/kitesurf-sunset.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://code-pal-post.lovable.app/experiences/kite-surfing" }],
    scripts: [
      {
        type: "application/ld+json",
        children:
          '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://code-pal-post.lovable.app/"},{"@type":"ListItem","position":2,"name":"Experiences","item":"https://code-pal-post.lovable.app/experiences"},{"@type":"ListItem","position":3,"name":"Kite Surfing","item":"https://code-pal-post.lovable.app/experiences/kite-surfing"}]}',
      },
    ],
  }),
  component: KitePage,
});

function KitePage() {
  useEffect(() => runGraceScripts(), []);
  return <ExperienceTemplate data={data} />;
}