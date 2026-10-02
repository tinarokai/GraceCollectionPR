import { Link } from "@tanstack/react-router";

export function GraceHeader({ active }: { active?: string }) {
  const cls = (name: string) => (active === name ? "active" : undefined);
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="/" className="logo-link" aria-label="Grace Collection">
          <img
            src="/assets/img/brand/logo-horizontal.png?v=3"
            alt="Grace Collection"
            className="logo-img"
          />
        </a>
        <nav className="nav">
          <a href="/" className={cls("home")}>Home</a>
          <div className="nav-item nav-item--has-menu">
            <button className="nav-trigger" type="button" aria-expanded="false" aria-haspopup="true">
              Villas <span className="caret" aria-hidden="true">▾</span>
            </button>
            <div className="nav-menu">
              <a href="/azure">
                <span className="nav-menu-name">Villa Azure</span>
                <span className="nav-menu-sub">The Contemporary · 7 suites</span>
              </a>
              <a href="/paradiso">
                <span className="nav-menu-name">Villa Paradiso</span>
                <span className="nav-menu-sub">The Classic · 9 suites</span>
              </a>
              <a href="/#both" className="nav-menu-foot">Book both villas →</a>
            </div>
          </div>
          <a href="/experiences" className={cls("experiences")}>Experiences</a>
          <a href="/weddings" className={cls("weddings")}>Weddings</a>
          <a href="/corporate" className={cls("corporate")}>Corporate</a>
          <a href="/faq" className={cls("faq")}>FAQ</a>
          <a href="/contact" className={cls("contact")}>Contact</a>
          <a
            href="https://villaazurevillaparadiso.guestybookings.com"
            target="_blank"
            rel="noopener"
            className="btn btn-light"
          >
            Reserve
          </a>
        </nav>
        <button className="menu-btn" aria-label="Open menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export function GraceFooter() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="logo-link" aria-label="Grace Collection">
              <img
                src="/assets/img/brand/logo-stacked.png?v=3"
                alt="Grace Collection"
                className="logo-img logo-img--stacked"
              />
            </a>
            <p>Two neighboring luxury villas in Ocean Park, San Juan. One place to compare, choose and reserve.</p>
          </div>
          <div>
            <h4>Villa Azure</h4>
            <ul>
              <li>5 C. Guerrero Noble<br />San Juan, PR 00913</li>
              <li><a href="tel:+19549001988">+1 (954) 900-1988</a></li>
              <li><a href="mailto:info@villaazurepr.com">info@villaazurepr.com</a></li>
              <li><a href="https://villaazurehotelpr.com/" target="_blank" rel="noopener">villaazurehotelpr.com ↗</a></li>
            </ul>
          </div>
          <div>
            <h4>Villa Paradiso</h4>
            <ul>
              <li>1 Calle Guerrero Noble<br />San Juan, PR 00913</li>
              <li><a href="tel:+19549001988">+1 (954) 900-1988</a></li>
              <li><a href="mailto:info@villaparadisopr.com">info@villaparadisopr.com</a></li>
              <li><a href="https://villaparadisopr.com/" target="_blank" rel="noopener">villaparadisopr.com ↗</a></li>
            </ul>
          </div>
          <div>
            <h4>Collection</h4>
            <ul>
              <li><a href="/#properties">The Villas</a></li>
              <li><a href="/experiences">Experiences</a></li>
              <li><a href="/weddings">Weddings</a></li>
              <li><a href="/corporate">Corporate</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© <span id="year">{new Date().getFullYear()}</span> Grace Collection · <span className="footer-location">Ocean Park · San Juan · Puerto Rico</span></span>
          <span>Est. 2026</span>
        </div>
      </div>
    </footer>
  );
}

export interface ExperienceContent {
  slug: string;
  name: string;
  tagline: string;
  eyebrow: string;
  heroImage: string;
  heroAlt: string;
  intro: string;
  sections: Array<{ title: string; body: string; image: string; alt: string }>;
  offerings: string[];
  tags: string;
}

export function ExperienceTemplate({ data }: { data: ExperienceContent }) {
  return (
    <div>
      <GraceHeader active="experiences" />

      <section className="villa-hero" id="top">
        <div className="hero-media">
          <img src={data.heroImage} alt={data.heroAlt} />
        </div>
        <div className="hero-inner">
          <span className="eyebrow hero-eyebrow">{data.eyebrow}</span>
          <h1 dangerouslySetInnerHTML={{ __html: data.name }} />
          <p className="lede">{data.tagline}</p>
          <div className="hero-cta">
            <a href="/contact" className="btn btn-fill">Book This Experience <span className="arrow">→</span></a>
            <a href="/experiences" className="btn btn-light">All Experiences</a>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="section-head fade-up" style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
            <span className="eyebrow"><span className="rule"></span>{data.name}<span className="rule"></span></span>
            <p style={{ fontSize: 18, marginTop: 18 }}>{data.intro}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="exp-rows" style={{ marginTop: 0 }}>
            {data.sections.map((s, i) => (
              <div key={i} className="exp-row fade-up">
                <div className="exp-media">
                  <span className="exp-num">{String(i + 1).padStart(2, "0")}</span>
                  <img src={s.image} alt={s.alt} loading="lazy" />
                </div>
                <div className="exp-body">
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="section-head fade-up">
            <span className="eyebrow"><span className="rule"></span>What's Included<span className="rule"></span></span>
            <h2>Signature offerings</h2>
            <p>{data.tags}</p>
          </div>
          <div className="offer-list">
            {data.offerings.map((o, i) => (
              <div key={i} className="offer-item fade-up">
                <h4>{o.split("\u2014")[0].trim()}</h4>
                {o.includes("\u2014") && <p>{o.split("\u2014").slice(1).join("\u2014").trim()}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section villa-final-cta">
        <div className="container">
          <div className="final-cta fade-up">
            <span className="eyebrow">Ready to book?</span>
            <h2>Bring {data.name.replace(/<[^>]+>/g, "")} to your stay.</h2>
            <p>Our concierge arranges every detail — timing, therapist, instructor, equipment, and location — so all you have to do is show up.</p>
            <div className="final-cta-buttons">
              <a href="/contact" className="btn btn-fill">Contact the Concierge <span className="arrow">→</span></a>
              <a href="/experiences" className="btn btn-dark">Explore More Experiences</a>
            </div>
          </div>
        </div>
      </section>

      <GraceFooter />
    </div>
  );
}