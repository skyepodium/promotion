const root = document.documentElement;
const cat = document.querySelector('[data-cat]');
const catFrames = [
  './assets/images/cat-walk-0.png',
  './assets/images/cat-walk-4.png',
  './assets/images/cat-jump-4.png',
];

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let ticking = false;

function updateMotion() {
  const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
  const progress = window.scrollY / maxScroll;
  const y = Math.round(progress * 160);
  const x = Math.round(Math.sin(progress * Math.PI * 2) * 34);

  root.style.setProperty('--motion-y', `${y}px`);
  root.style.setProperty('--motion-x', `${x}px`);

  if (cat && catFrames.length > 0) {
    const frameIndex = Math.min(catFrames.length - 1, Math.floor(progress * catFrames.length * 3) % catFrames.length);
    const nextSrc = catFrames[frameIndex];
    if (!cat.src.endsWith(nextSrc.replace('./', ''))) {
      cat.src = nextSrc;
    }
  }

  ticking = false;
}

function requestMotionUpdate() {
  if (reduceMotion || ticking) {
    return;
  }
  ticking = true;
  window.requestAnimationFrame(updateMotion);
}

const observer = new IntersectionObserver(
  entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    }
  },
  {threshold: 0.25},
);

for (const element of document.querySelectorAll('.reveal')) {
  observer.observe(element);
}

window.addEventListener('scroll', requestMotionUpdate, {passive: true});
window.addEventListener('resize', requestMotionUpdate);
updateMotion();
