import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { runGraceScripts } from "@/lib/grace-scripts";
import { ExperienceTemplate, type ExperienceContent } from "@/lib/grace-chrome";

const data: ExperienceContent = {
  slug: "yoga",
  name: "Yoga",
  eyebrow: "Experiences · Grace Collection",
  tagline: "Sunrise on Ocean Park Beach, or a private session in the gardens — arranged around your schedule.",
  heroImage: "/assets/img/experiences/yoga-pose.jpg",
  heroAlt: "Beach yoga at sunrise on Ocean Park",
  intro:
    "Yoga at Grace Collection is unhurried and outdoors. Private instructors meet you on the sand for sunrise flow, in the villa gardens for restorative sessions, or in your suite for something more intimate. For retreats and group programs, the entire villa can be reserved.",
  sections: [
    {
      title: "Sunrise on Ocean Park Beach.",
      body:
        "Vinyasa, hatha, or gentle stretching as the sun comes up over the Atlantic. Mats, props, and towels provided — you just walk down to the sand from your suite.",
      image: "/assets/img/experiences/yoga-pose.jpg",
      alt: "Sunrise beach yoga",
    },
    {
      title: "Private sessions in the gardens.",
      body:
        "Prefer shade and privacy? Sessions unfold on the villa terrace or in the tropical garden. Perfect for solo travelers, couples, and small groups traveling together.",
      image: "/assets/img/experiences/yoga-shore.jpg",
      alt: "Villa garden and pool for yoga",
    },
    {
      title: "Full-villa retreats.",
      body:
        "Planning a wellness retreat? Book the entire villa for your teachers and students — dedicated instructors, catered meals, and a setting steps from the beach that becomes your studio for the week.",
      image: "/assets/img/paradiso-real/pool/sun-loungers.jpg",
      alt: "Sun loungers by the pool",
    },
  ],
  offerings: [
    "Sunrise Beach Sessions — Vinyasa or hatha on Ocean Park sand",
    "Private In-Suite Yoga — Restorative, prenatal, and one-on-one flows",
    "Group Sessions — For families, wedding parties, and corporate offsites",
    "Retreats — Full-villa buyouts for teachers and their students",
  ],
  tags: "Every session is private, outdoors, and scheduled around you.",
};

export const Route = createFileRoute("/experiences/yoga")({
  head: () => ({
    meta: [
      { title: "Beach & Private Yoga in San Juan, PR | Grace Collection" },
      { name: "description", content: "Sunrise yoga on Ocean Park Beach, private garden sessions, and full-villa retreats at Villa Azure & Villa Paradiso." },
      { property: "og:title", content: "Beach & Private Yoga in San Juan, PR | Grace Collection" },
      { property: "og:description", content: "Sunrise beach yoga, private garden sessions, and full-villa retreats at Grace Collection." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://code-pal-post.lovable.app/experiences/yoga" },
      { property: "og:image", content: "https://code-pal-post.lovable.app/assets/img/experiences/yoga-pose.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Beach & Private Yoga in San Juan, PR | Grace Collection" },
      { name: "twitter:description", content: "Sunrise beach yoga, private garden sessions, and retreats." },
      { name: "twitter:image", content: "https://code-pal-post.lovable.app/assets/img/experiences/yoga-pose.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://code-pal-post.lovable.app/experiences/yoga" }],
    scripts: [
      {
        type: "application/ld+json",
        children:
          '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://code-pal-post.lovable.app/"},{"@type":"ListItem","position":2,"name":"Experiences","item":"https://code-pal-post.lovable.app/experiences"},{"@type":"ListItem","position":3,"name":"Yoga","item":"https://code-pal-post.lovable.app/experiences/yoga"}]}',
      },
    ],
  }),
  component: YogaPage,
});

function YogaPage() {
  useEffect(() => runGraceScripts(), []);
  return <ExperienceTemplate data={data} />;
}