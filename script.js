// ---------- Hero typing effect ----------
const typedEl = document.getElementById('typed');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const typedText = 'whoami';

function typeOut(el, text, speed = 90) {
  let i = 0;
  el.textContent = '';
  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

if (typedEl) {
  if (prefersReducedMotion) {
    typedEl.textContent = typedText;
  } else {
    typeOut(typedEl, typedText);
  }
}

// ---------- Scroll-spy nav ----------
const navLinks = document.querySelectorAll('.panel-list a[data-section]');
const sections = Array.from(navLinks)
  .map(link => document.getElementById(link.dataset.section))
  .filter(Boolean);

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === id);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
  );
  sections.forEach(section => observer.observe(section));
}

// ---------- Footer clock ----------
const clockEl = document.getElementById('clock');
function updateClock() {
  if (!clockEl) return;
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  clockEl.textContent = `local time ${hh}:${mm}:${ss}`;
}
updateClock();
setInterval(updateClock, 1000);
