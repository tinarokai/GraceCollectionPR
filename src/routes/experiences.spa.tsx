import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { runGraceScripts } from "@/lib/grace-scripts";
import { ExperienceTemplate, type ExperienceContent } from "@/lib/grace-chrome";

const data: ExperienceContent = {
  slug: "spa",
  name: "Spa",
  eyebrow: "Experiences · Grace Collection",
  tagline: "No spa walls, no waiting rooms — the full spa experience, delivered to your suite.",
  heroImage: "/assets/img/azure/2024/12/Exclusive-Villa-29.webp",
  heroAlt: "In-suite spa treatment at Villa Azure",
  intro:
    "Grace Collection's spa program brings licensed therapists and estheticians directly to your suite, garden, or poolside cabana. There's no schedule to keep and no queue to wait in — treatments unfold at your pace, in the setting you're already enjoying.",
  sections: [
    {
      title: "Facials tailored to Caribbean light.",
      body:
        "Deep-cleansing, hydrating, anti-aging, and brightening protocols using clean, professional-grade skincare. Every facial is customized to your skin's needs after sun, salt, and travel — because Puerto Rico's climate calls for its own approach.",
      image: "/assets/img/azure/2024/12/Exclusive-Villa-34.webp",
      alt: "In-suite facial treatment",
    },
    {
      title: "Body treatments in your own quiet space.",
      body:
        "Sea-salt scrubs, seaweed and mud wraps, aromatherapy rituals — restorative body work delivered on your terrace, in your suite, or beside the pool. Ocean sounds instead of a spa playlist.",
      image: "/assets/img/paradiso-real/pool/side-patio-ocean.jpg",
      alt: "Relaxing poolside patio",
    },
  ],
  offerings: [
    "Signature Facials — Customized for hydration, anti-aging, or brightening",
    "Body Scrubs & Wraps — Sea salt, seaweed, coconut, and Caribbean botanicals",
    "Couples Treatments — Side-by-side rituals in your suite or garden",
    "Pre-Wedding Prep — Bridal and groom parties, group bookings available",
  ],
  tags: "Every treatment is in-suite, on your schedule, with licensed local therapists.",
};

export const Route = createFileRoute("/experiences/spa")({
  head: () => ({
    meta: [
      { title: "In-Suite Spa in San Juan, PR | Grace Collection" },
      { name: "description", content: "Licensed therapists deliver facials, body treatments, and rituals to your suite at Villa Azure & Villa Paradiso on Ocean Park, San Juan." },
      { property: "og:title", content: "In-Suite Spa in San Juan, PR | Grace Collection" },
      { property: "og:description", content: "Facials, body treatments, and Caribbean rituals delivered to your suite at Grace Collection." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://code-pal-post.lovable.app/experiences/spa" },
      { property: "og:image", content: "https://code-pal-post.lovable.app/assets/img/azure/2024/12/Exclusive-Villa-29.webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "In-Suite Spa in San Juan, PR | Grace Collection" },
      { name: "twitter:description", content: "Facials, body treatments, and Caribbean rituals delivered to your suite." },
      { name: "twitter:image", content: "https://code-pal-post.lovable.app/assets/img/azure/2024/12/Exclusive-Villa-29.webp" },
    ],
    links: [{ rel: "canonical", href: "https://code-pal-post.lovable.app/experiences/spa" }],
    scripts: [
      {
        type: "application/ld+json",
        children:
          '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://code-pal-post.lovable.app/"},{"@type":"ListItem","position":2,"name":"Experiences","item":"https://code-pal-post.lovable.app/experiences"},{"@type":"ListItem","position":3,"name":"Spa","item":"https://code-pal-post.lovable.app/experiences/spa"}]}',
      },
    ],
  }),
  component: SpaPage,
});

function SpaPage() {
  useEffect(() => runGraceScripts(), []);
  return <ExperienceTemplate data={data} />;
}