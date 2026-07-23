// ---------- Hero typing effect ----------
const typedEl = document.getElementById('typed');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const typedCommands = [
  'whoami',
  'cd timi/folayan',
  'cat about.md',
  './calibrate --valves 1000000',
  'grep -r "hardware" ./interests',
  'git commit -m "graduating May 2027"',
  'ssh sde@emerson-austin',
  'sudo apt install formal-methods',
];

function typeLoop(el, commands, opts = {}) {
  const { typeSpeed = 90, deleteSpeed = 40, holdTime = 1400, gapTime = 400 } = opts;
  let cmdIndex = 0;

  function typePhase() {
    const text = commands[cmdIndex];
    let i = 0;
    el.textContent = '';
    const interval = setInterval(() => {
      el.textContent += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setTimeout(deletePhase, holdTime);
      }
    }, typeSpeed);
  }

  function deletePhase() {
    const interval = setInterval(() => {
      el.textContent = el.textContent.slice(0, -1);
      if (el.textContent.length === 0) {
        clearInterval(interval);
        cmdIndex = (cmdIndex + 1) % commands.length;
        setTimeout(typePhase, gapTime);
      }
    }, deleteSpeed);
  }

  typePhase();
}

if (typedEl) {
  if (prefersReducedMotion) {
    typedEl.textContent = typedCommands[0];
  } else {
    typeLoop(typedEl, typedCommands);
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
