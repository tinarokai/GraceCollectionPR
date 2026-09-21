import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { runGraceScripts } from "@/lib/grace-scripts";
import { ExperienceTemplate, type ExperienceContent } from "@/lib/grace-chrome";

const data: ExperienceContent = {
  slug: "massage",
  name: "Massage",
  eyebrow: "Experiences · Grace Collection",
  tagline: "Deep tissue, Swedish, couples, or hot stone — brought to your door by licensed local therapists.",
  heroImage: "/assets/img/experiences/massage-back.jpg",
  heroAlt: "In-suite massage at Villa Azure",
  intro:
    "Skip the drive, skip the changing room. Grace Collection's massage service brings the table, the linens, the oils, and a licensed therapist to your suite. Couples treatments unfold side by side; solo sessions on your private terrace with the ocean as the soundtrack.",
  sections: [
    {
      title: "The full menu, in your suite.",
      body:
        "Swedish, deep tissue, sports recovery, prenatal, reflexology, and Caribbean-inspired hot stone. Choose the modality; we handle the rest — table, warmed linens, oils, and music.",
      image: "/assets/img/experiences/massage-hands.jpg",
      alt: "Private massage setting",
    },
    {
      title: "Couples & wedding parties.",
      body:
        "Side-by-side treatments in your suite, or matched sessions across the villa for the wedding party. Groom's parties, bachelorette weekends, and honeymoons all benefit from booking ahead.",
      image: "/assets/img/weddings/pool-view.webp",
      alt: "Villa pool view",
    },
  ],
  offerings: [
    "Swedish & Deep Tissue — Classic relaxation and therapeutic pressure",
    "Hot Stone — Warmed volcanic stones for deep muscle release",
    "Couples Massage — Side-by-side, in-suite, at the same hour",
    "Sports & Recovery — Post-travel, post-kite, or post-hike recovery work",
  ],
  tags: "All treatments in-suite, with licensed and insured local therapists.",
};

export const Route = createFileRoute("/experiences/massage")({
  head: () => ({
    meta: [
      { title: "In-Suite Massage in San Juan, PR | Grace Collection" },
      { name: "description", content: "Swedish, deep tissue, hot stone, and couples massage delivered to your suite at Villa Azure & Villa Paradiso on Ocean Park." },
      { property: "og:title", content: "In-Suite Massage in San Juan, PR | Grace Collection" },
      { property: "og:description", content: "Deep tissue, Swedish, hot stone, and couples massage in your suite at Grace Collection." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://gracecollectionpr.com/experiences/massage" },
      { property: "og:image", content: "https://gracecollectionpr.com/assets/img/experiences/massage-back.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "In-Suite Massage in San Juan, PR | Grace Collection" },
      { name: "twitter:description", content: "Deep tissue, Swedish, hot stone, and couples massage in your suite." },
      { name: "twitter:image", content: "https://gracecollectionpr.com/assets/img/experiences/massage-back.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://gracecollectionpr.com/experiences/massage" }],
    scripts: [
      {
        type: "application/ld+json",
        children:
          '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://gracecollectionpr.com/"},{"@type":"ListItem","position":2,"name":"Experiences","item":"https://gracecollectionpr.com/experiences"},{"@type":"ListItem","position":3,"name":"Massage","item":"https://gracecollectionpr.com/experiences/massage"}]}',
      },
    ],
  }),
  component: MassagePage,
});

function MassagePage() {
  useEffect(() => runGraceScripts(), []);
  return <ExperienceTemplate data={data} />;
}