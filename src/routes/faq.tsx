import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { runGraceScripts } from "@/lib/grace-scripts";

const FAQS = [
  {
    q: "What is the Grace Collection?",
    a: "The Grace Collection is two neighboring boutique luxury villas in Ocean Park, San Juan, Puerto Rico: Villa Azure (The Contemporary, 7 suites, steps from the beach) and Villa Paradiso (The Classic, 9 suites, oceanfront with direct beach access). Book either villa on its own, or both together as a combined 16-bedroom collection of two neighboring villas.",
  },
  {
    q: "What is the difference between Villa Azure and Villa Paradiso?",
    a: "Villa Azure is The Contemporary: 7 suites with a modern, design-forward feel, just steps from the beach. Villa Paradiso is The Classic: 9 suites on the oceanfront with the Garden Pavilion and a more traditional elegance. They sit on the same block, share one team, and can be combined for larger groups.",
  },
  {
    q: "Where are the villas located?",
    a: "Both villas are on Calle Guerrero Noble in Ocean Park, San Juan, Puerto Rico 00913: Villa Azure at number 5 and Villa Paradiso at number 1. They are one minute from Ocean Park Beach and minutes from Condado and Old San Juan.",
  },
  {
    q: "How far are the villas from the airport?",
    a: "Luis Munoz Marin International Airport (SJU) is about a 15 minute drive from Ocean Park. Airport transfers can be arranged for your group.",
  },
  {
    q: "Can I book both villas together?",
    a: "Yes. Booking both villas gives you a combined 16-bedroom collection sleeping up to 36 overnight guests under a single reservation, with two pools and one point of contact for the whole stay.",
  },
  {
    q: "How many guests can each villa host?",
    a: "Villa Azure accommodates up to 16 overnight guests across seven bedrooms. Villa Paradiso accommodates up to 20 overnight guests across nine bedrooms. Reserved together, the Grace Collection accommodates up to 36 overnight guests.",
  },
  {
    q: "How do I get the best rate?",
    a: "Book directly through our reservation system for current availability, rates, and direct assistance from our team.",
  },
  {
    q: "Do the villas have their own websites?",
    a: "Yes. Villa Azure is at villaazurehotelpr.com and Villa Paradiso is at villaparadisopr.com, each with full photo galleries and details. This site is the place to compare the two and book them together.",
  },
  {
    q: "What are the check-in and check-out times?",
    a: "Check-in is at 4:00 pm and check-out is at 10:00 am. If your flights need flexibility, contact us and we will do our best to accommodate.",
  },
  {
    q: "Are pets allowed?",
    a: "No, pets are not allowed at either villa.",
  },
  {
    q: "Can I host a wedding at the Grace Collection?",
    a: "Yes. Villa Paradiso can host weddings and private events, with a ceremony garden, the Garden Pavilion, and private events for up to 150 guests. For larger wedding groups, additional accommodations, or a complete destination-wedding experience, Villa Azure and Villa Paradiso may also be reserved together as the full Grace Collection, with 16 bedrooms for up to 36 overnight guests.",
  },
  {
    q: "Do you host corporate retreats?",
    a: "Yes. Corporate retreats may be hosted at Villa Azure, Villa Paradiso, or across both properties, depending on the size and requirements of the group. The full collection provides 16 bedrooms for up to 36 overnight guests, two pools, event and dining spaces, and one coordinator for the whole program.",
  },
  {
    q: "What experiences can be arranged during a stay?",
    a: "In-villa spa treatments and massage, private yoga sessions in the gardens or on the beach, and kitesurfing at Ocean Park Beach, one of Puerto Rico's best-known kite spots. Private chef service and concierge planning can also be arranged for your stay.",
  },
  {
    q: "What languages does the team speak?",
    a: "English, Spanish and French. Replies usually arrive within 24 hours, often same day.",
  },
  {
    q: "How do I contact the Grace Collection?",
    a: "Call +1 (954) 900-1988 or WhatsApp +1 (561) 289-2565, email info@villaazurepr.com or info@villaparadisopr.com, or use the contact form on this site. One team handles both villas.",
  },
  {
    q: "What are the best things to do in San Juan?",
    a: "Walk Old San Juan and the El Morro fortress, eat and dance at La Placita de Santurce, spend beach days right on Ocean Park, and day-trip to El Yunque rainforest. Kitesurfing, snorkeling and boat charters are all close by, and our team can arrange any of it.",
  },
  {
    q: "What are the best restaurants near Ocean Park?",
    a: "Kasalta, the legendary Ocean Park bakery and deli, is a short walk away, along with beachfront spots like Pamela's and Numero Uno Beach House. Ten minutes away, La Placita de Santurce has standouts like Santaella and Jose Enrique, plus the Lote 23 food park. In Old San Juan, Marmalade is a favorite for a dressed-up dinner.",
  },
  {
    q: "Which beaches should we visit?",
    a: "Ocean Park Beach is directly accessible from Villa Paradiso and just steps from Villa Azure, and it is one of San Juan's widest and most relaxed. Condado and Isla Verde are minutes away, Escambron is the local snorkeling spot, and Flamenco Beach on Culebra, often ranked among the world's best, makes a great day trip.",
  },
  {
    q: "What day trips can we take from the villas?",
    a: "El Yunque rainforest is about 45 minutes east. Kayak the glowing bioluminescent bay in Fajardo at night, ferry or fly to Culebra for Flamenco Beach, visit Vieques and Mosquito Bay, or graze the beachside food kiosks of Pinones just past Isla Verde.",
  },
  {
    q: "Do I need a passport to visit Puerto Rico?",
    a: "US citizens do not need a passport. Puerto Rico is a US territory, so domestic flights, US dollars, and US phone plans all work exactly like home. International visitors follow the same entry requirements as for the mainland United States.",
  },
  {
    q: "When is the best time to visit Puerto Rico?",
    a: "December through April is the dry, breezy high season. May through November is warmer and quieter with better availability, and the ocean stays swimmable all year, with temperatures around 75 to 85 degrees in every month.",
  },
  {
    q: "How do we get around San Juan?",
    a: "Uber is reliable across San Juan, and Ocean Park itself is walkable to the beach, cafes and Kasalta. You only need a rental car for day trips like El Yunque or Fajardo, and free parking is available at the villas.",
  },
  {
    q: "What is the nightlife like near Ocean Park?",
    a: "La Placita de Santurce, ten minutes away, turns into San Juan's liveliest open-air party from Thursday to Saturday. Condado has lounges and casinos, and Old San Juan mixes historic bars with salsa spots. Ocean Park itself stays quiet at night, which is exactly why guests love sleeping here.",
  },
];

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

function faqItems(from: number, to: number) {
  return FAQS.slice(from, to)
    .map((f) => `<details class="faq-item"><summary>${f.q}</summary><p>${f.a}</p></details>`)
    .join("\n        ");
}

const HTML = `<header class="site-header">
  <div class="header-inner">
    <a href="/" class="logo-link" aria-label="Grace Collection">
      <img src="/assets/img/brand/logo-horizontal.png?v=3" alt="Grace Collection" class="logo-img">
    </a>
    <nav class="nav">
      <a href="/">Home</a>
      <div class="nav-item nav-item--has-menu">
        <button class="nav-trigger" type="button" aria-expanded="false" aria-haspopup="true">Villas <span class="caret" aria-hidden="true">▾</span></button>
        <div class="nav-menu">
          <a href="/azure"><span class="nav-menu-name">Villa Azure</span><span class="nav-menu-sub">The Contemporary · 7 suites</span></a>
          <a href="/paradiso"><span class="nav-menu-name">Villa Paradiso</span><span class="nav-menu-sub">The Classic · 9 suites</span></a>
          <a href="/#both" class="nav-menu-foot">Book both villas →</a>
        </div>
      </div>
      <a href="/experiences">Experiences</a>
      <a href="/weddings">Weddings</a>
      <a href="/corporate">Corporate</a>
      <a href="/faq" class="active">FAQ</a>
      <a href="/contact">Contact</a>
      <a href="https://villaazurevillaparadiso.guestybookings.com" target="_blank" rel="noopener" class="btn btn-light">Reserve</a>
    </nav>
    <button class="menu-btn" aria-label="Open menu">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
    </button>
  </div>
</header>

<!-- Hero -->
<section class="villa-hero" id="top">
  <div class="hero-media">
    <img src="/assets/img/azure/2025/02/193a39ec.webp" alt="Ocean Park beach at sunset">
  </div>
  <div class="hero-inner">
    <span class="eyebrow hero-eyebrow">FAQ · Grace Collection</span>
    <h1>Good to know, <em>before you book.</em></h1>
    <p class="lede">Everything guests ask about the two villas, booking them together, weddings, retreats and getting here, all answered in one place.</p>
    <div class="hero-cta">
      <a href="https://villaazurevillaparadiso.guestybookings.com" target="_blank" rel="noopener" class="btn btn-fill">Check Availability <span class="arrow">→</span></a>
      <a href="/contact" class="btn btn-light">Ask Us Directly</a>
    </div>
  </div>
</section>

<!-- The Collection -->
<section class="section section-cream">
  <div class="container">
    <div class="section-head fade-up">
      <span class="eyebrow"><span class="rule"></span>The Collection<span class="rule"></span></span>
      <h2>Two villas, one block.</h2>
    </div>
    <div class="faq-list fade-up">
        ${faqItems(0, 4)}
    </div>
  </div>
</section>

<!-- Booking & stays -->
<section class="section">
  <div class="container">
    <div class="section-head fade-up">
      <span class="eyebrow"><span class="rule"></span>Booking &amp; Stays<span class="rule"></span></span>
      <h2>Reserving your dates.</h2>
    </div>
    <div class="faq-list fade-up">
        ${faqItems(4, 10)}
    </div>
  </div>
</section>

<!-- Events & experiences -->
<section class="section section-cream">
  <div class="container">
    <div class="section-head fade-up">
      <span class="eyebrow"><span class="rule"></span>Events &amp; Experiences<span class="rule"></span></span>
      <h2>Weddings, retreats and more.</h2>
    </div>
    <div class="faq-list fade-up">
        ${faqItems(10, 15)}
    </div>
  </div>
</section>

<!-- Visiting Puerto Rico -->
<section class="section">
  <div class="container">
    <div class="section-head fade-up">
      <span class="eyebrow"><span class="rule"></span>Visiting Puerto Rico<span class="rule"></span></span>
      <h2>Plan the rest of the trip.</h2>
    </div>
    <div class="faq-list fade-up">
        ${faqItems(15, 23)}
    </div>
  </div>
</section>

<!-- CTA -->
<section class="section section-cream">
  <div class="container">
    <div class="section-head fade-up">
      <span class="eyebrow"><span class="rule"></span>Still Deciding?<span class="rule"></span></span>
      <h2>We&rsquo;ll help you choose.</h2>
      <p>Tell us your dates, group size and occasion, and we&rsquo;ll recommend the right villa, or both.</p>
      <div class="hero-cta" style="justify-content:center;margin-top:28px">
        <a href="/contact" class="btn btn-dark">Contact Us <span class="arrow">→</span></a>
        <a href="https://villaazurevillaparadiso.guestybookings.com" target="_blank" rel="noopener" class="btn btn-fill">Reserve <span class="arrow">→</span></a>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="/" class="logo-link" aria-label="Grace Collection">
          <img src="/assets/img/brand/logo-stacked.png?v=3" alt="Grace Collection" class="logo-img logo-img--stacked">
        </a>
        <p>Two boutique villas on Ocean Park, San Juan — one place to compare, choose and reserve.</p>
      </div>
      <div>
        <h4>Villa Azure</h4>
        <ul>
          <li>5 C. Guerrero Noble<br>San Juan, PR 00913</li>
          <li><a href="tel:+19549001988">+1 (954) 900-1988</a></li>
          <li><a href="mailto:info@villaazurepr.com">info@villaazurepr.com</a></li>
          <li><a href="https://villaazurehotelpr.com/" target="_blank" rel="noopener">villaazurehotelpr.com ↗</a></li>
        </ul>
      </div>
      <div>
        <h4>Villa Paradiso</h4>
        <ul>
          <li>1 Calle Guerrero Noble<br>San Juan, PR 00913</li>
          <li><a href="tel:+19549001988">+1 (954) 900-1988</a></li>
          <li><a href="mailto:info@villaparadisopr.com">info@villaparadisopr.com</a></li>
          <li><a href="https://villaparadisopr.com/" target="_blank" rel="noopener">villaparadisopr.com ↗</a></li>
        </ul>
      </div>
      <div>
        <h4>Collection</h4>
        <ul>
          <li><a href="/#properties">The Villas</a></li>
          <li><a href="/weddings">Weddings</a></li>
          <li><a href="/corporate">Corporate</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© <span id="year"></span> Grace Collection · <span class="footer-location">Ocean Park · San Juan · Puerto Rico</span></span>
      <span>Est. 2026</span>
    </div>
  </div>
</footer>`;

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Grace Collection FAQ | Villa Azure & Villa Paradiso, San Juan" },
      { name: "description", content: "Answers to common questions about Grace Collection: Villa Azure and Villa Paradiso in Ocean Park, San Juan. Booking both villas, weddings, retreats, check-in and more." },
      { property: "og:title", content: "Grace Collection FAQ | Villa Azure & Villa Paradiso, San Juan" },
      { property: "og:description", content: "Answers to common questions about Grace Collection: booking both villas, weddings, retreats, check-in and more." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://gracecollectionpr.com/faq" },
      { property: "og:image", content: "https://gracecollectionpr.com/assets/img/paradiso-real/exterior/villa-front.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Grace Collection FAQ | Villa Azure & Villa Paradiso, San Juan" },
      { name: "twitter:description", content: "Answers to common questions about Grace Collection: booking both villas, weddings, retreats, check-in and more." },
      { name: "twitter:image", content: "https://gracecollectionpr.com/assets/img/paradiso-real/exterior/villa-front.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://gracecollectionpr.com/faq" },
    ],
    scripts: [
      { type: "application/ld+json", children: faqSchema },
      { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://gracecollectionpr.com/" },
          { "@type": "ListItem", position: 2, name: "FAQ", item: "https://gracecollectionpr.com/faq" },
        ],
      }) },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  useEffect(() => {
    const cleanup = runGraceScripts();
    return cleanup;
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: HTML }} />;
}
