document.documentElement.classList.add('js');

// Header solid on scroll
const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('solid', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn?.addEventListener('click', () => nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Fade-up on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

// Date defaults: today and +3 days
const today = new Date();
const fmt = d => d.toISOString().slice(0, 10);
const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
const inEl = document.getElementById('checkin');
const outEl = document.getElementById('checkout');
if (inEl && outEl) {
  inEl.min = fmt(today);
  inEl.value = fmt(addDays(today, 14));
  outEl.min = fmt(addDays(today, 1));
  outEl.value = fmt(addDays(today, 17));
  inEl.addEventListener('change', () => {
    const ci = new Date(inEl.value);
    outEl.min = fmt(addDays(ci, 1));
    if (new Date(outEl.value) <= ci) outEl.value = fmt(addDays(ci, 3));
    syncCtas();
  });
  outEl.addEventListener('change', syncCtas);
  document.getElementById('guests')?.addEventListener('change', syncCtas);
}

// Booking handoff — append search params to property booking links
const SITES = {
  azure: 'https://villaazurepr.com/',
  paradiso: 'https://villaparadisopr.com/',
};

function syncCtas() {
  const ci = inEl?.value || '';
  const co = outEl?.value || '';
  const g = document.getElementById('guests')?.value || '2';
  document.querySelectorAll('[data-book]').forEach(a => {
    const which = a.dataset.book;
    const url = new URL(SITES[which]);
    if (ci) url.searchParams.set('check_in', ci);
    if (co) url.searchParams.set('check_out', co);
    if (g) url.searchParams.set('guests', g);
    a.href = url.toString();
  });
}
syncCtas();

// Booking submit — scroll to properties so the user can pick
document.getElementById('booking')?.addEventListener('submit', e => {
  e.preventDefault();
  syncCtas();
  document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
});

// Nav dropdown — click on touch / for keyboard
document.querySelectorAll('.nav-item--has-menu').forEach(item => {
  const trig = item.querySelector('.nav-trigger');
  trig?.addEventListener('click', e => {
    e.preventDefault();
    const open = item.classList.toggle('open');
    trig.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});
document.addEventListener('click', e => {
  document.querySelectorAll('.nav-item--has-menu.open').forEach(item => {
    if (!item.contains(e.target)) item.classList.remove('open');
  });
});

// Year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Hero carousel — auto-advance every 5s, crossfade via CSS opacity transition
const heroCarousel = document.getElementById('hero-carousel');
if (heroCarousel) {
  const slides = heroCarousel.querySelectorAll('.hero-slide');
  if (slides.length > 1) {
    let idx = 0;
    setInterval(() => {
      slides[idx].classList.remove('is-active');
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add('is-active');
    }, 5000);
  }
}
