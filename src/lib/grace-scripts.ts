// Ported from assets/js/main.js — runs after each route mounts.
export function runGraceScripts(): () => void {
  document.documentElement.classList.add("js");

  const header = document.querySelector<HTMLElement>(".site-header");
  const onScroll = () => header?.classList.toggle("solid", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const menuBtn = document.querySelector<HTMLButtonElement>(".menu-btn");
  const nav = document.querySelector<HTMLElement>(".nav");
  const onMenuBtn = () => nav?.classList.toggle("open");
  menuBtn?.addEventListener("click", onMenuBtn);
  const navAnchorHandlers: Array<[HTMLAnchorElement, () => void]> = [];
  nav?.querySelectorAll("a").forEach((a) => {
    const h = () => nav.classList.remove("open");
    a.addEventListener("click", h);
    navAnchorHandlers.push([a as HTMLAnchorElement, h]);
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  document.querySelectorAll(".fade-up").forEach((el) => io.observe(el));

  const today = new Date();
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  const addDays = (d: Date, n: number) => {
    const x = new Date(d);
    x.setDate(x.getDate() + n);
    return x;
  };
  const inEl = document.getElementById("checkin") as HTMLInputElement | null;
  const outEl = document.getElementById("checkout") as HTMLInputElement | null;
  const guestsEl = document.getElementById("guests") as HTMLSelectElement | null;

  // Each villa's Guesty booking engine (villaazurepr.com now redirects to the hotel homepage).
  const SITES: Record<string, string> = {
    azure: "https://villaazure.guestybookings.com/en/properties",
    paradiso: "https://villaparadisopr.guestybookings.com/en/properties",
  };

  function syncCtas() {
    const ci = inEl?.value || "";
    const co = outEl?.value || "";
    const g = guestsEl?.value || "2";
    document.querySelectorAll<HTMLAnchorElement>("[data-book]").forEach((a) => {
      const which = a.dataset.book as keyof typeof SITES;
      if (!which || !SITES[which]) return;
      const url = new URL(SITES[which]);
      if (ci) url.searchParams.set("checkIn", ci);
      if (co) url.searchParams.set("checkOut", co);
      if (g) url.searchParams.set("minOccupancy", g);
      a.href = url.toString();
    });
  }

  const onInChange = () => {
    if (!inEl || !outEl) return;
    const ci = new Date(inEl.value);
    outEl.min = fmt(addDays(ci, 1));
    if (new Date(outEl.value) <= ci) outEl.value = fmt(addDays(ci, 3));
    syncCtas();
  };

  if (inEl && outEl) {
    inEl.min = fmt(today);
    inEl.value = fmt(addDays(today, 14));
    outEl.min = fmt(addDays(today, 1));
    outEl.value = fmt(addDays(today, 17));
    inEl.addEventListener("change", onInChange);
    outEl.addEventListener("change", syncCtas);
    guestsEl?.addEventListener("change", syncCtas);
  }
  syncCtas();

  const bookingForm = document.getElementById("booking") as HTMLFormElement | null;
  const onBookingSubmit = (e: Event) => {
    e.preventDefault();
    syncCtas();
    document.getElementById("properties")?.scrollIntoView({ behavior: "smooth" });
  };
  bookingForm?.addEventListener("submit", onBookingSubmit);

  const navItemHandlers: Array<[HTMLElement, HTMLElement, (e: Event) => void]> = [];
  document.querySelectorAll<HTMLElement>(".nav-item--has-menu").forEach((item) => {
    const trig = item.querySelector<HTMLElement>(".nav-trigger");
    if (!trig) return;
    const h = (e: Event) => {
      e.preventDefault();
      const open = item.classList.toggle("open");
      trig.setAttribute("aria-expanded", open ? "true" : "false");
    };
    trig.addEventListener("click", h);
    navItemHandlers.push([item, trig, h]);
  });
  const onDocClick = (e: Event) => {
    document.querySelectorAll<HTMLElement>(".nav-item--has-menu.open").forEach((item) => {
      if (!item.contains(e.target as Node)) item.classList.remove("open");
    });
  };
  document.addEventListener("click", onDocClick);

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const heroCarousel = document.getElementById("hero-carousel");
  let carouselTimer: ReturnType<typeof setInterval> | null = null;
  if (heroCarousel) {
    const slides = heroCarousel.querySelectorAll(".hero-slide");
    if (slides.length > 1) {
      let idx = 0;
      carouselTimer = setInterval(() => {
        slides[idx].classList.remove("is-active");
        idx = (idx + 1) % slides.length;
        slides[idx].classList.add("is-active");
      }, 5000);
    }
  }

  return () => {
    window.removeEventListener("scroll", onScroll);
    menuBtn?.removeEventListener("click", onMenuBtn);
    navAnchorHandlers.forEach(([a, h]) => a.removeEventListener("click", h));
    io.disconnect();
    inEl?.removeEventListener("change", onInChange);
    outEl?.removeEventListener("change", syncCtas);
    guestsEl?.removeEventListener("change", syncCtas);
    bookingForm?.removeEventListener("submit", onBookingSubmit);
    navItemHandlers.forEach(([, t, h]) => t.removeEventListener("click", h));
    document.removeEventListener("click", onDocClick);
    if (carouselTimer) clearInterval(carouselTimer);
  };
}
