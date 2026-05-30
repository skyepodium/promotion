const root = document.documentElement;
const cat = document.querySelector('[data-cat]');
const heroStage = document.querySelector('[data-hero-stage]');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let ticking = false;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateMotion() {
  const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
  const progress = window.scrollY / maxScroll;
  const heroRect = heroStage?.getBoundingClientRect();
  const heroRange = heroRect ? window.innerHeight + heroRect.height : 1;
  const heroProgress = heroRect ? clamp((window.innerHeight - heroRect.top) / heroRange, 0, 1) : 0;
  const y = Math.round(progress * 160);
  const x = Math.round(Math.sin(progress * Math.PI * 2) * 34);
  const heroFastY = Math.round((heroProgress - 0.5) * 86);
  const heroSlowY = Math.round((0.5 - heroProgress) * 42);
  const heroDriftX = Math.round(Math.sin(heroProgress * Math.PI) * 18);

  root.style.setProperty('--motion-y', `${y}px`);
  root.style.setProperty('--motion-x', `${x}px`);
  root.style.setProperty('--hero-fast-y', `${heroFastY}px`);
  root.style.setProperty('--hero-slow-y', `${heroSlowY}px`);
  root.style.setProperty('--hero-drift-x', `${heroDriftX}px`);
  root.style.setProperty('--hero-drift-x-neg', `${heroDriftX * -1}px`);

  if (cat) {
    cat.style.rotate = `${Math.round(Math.sin(progress * Math.PI * 3) * 5)}deg`;
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

function updatePointerMotion(event) {
  if (reduceMotion || !heroStage) {
    return;
  }

  const rect = heroStage.getBoundingClientRect();
  const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
  const offsetY = (event.clientY - rect.top) / rect.height - 0.5;
  const x = clamp(offsetX, -0.5, 0.5);
  const y = clamp(offsetY, -0.5, 0.5);

  root.style.setProperty('--pointer-main-x', `${Math.round(x * 24)}px`);
  root.style.setProperty('--pointer-main-y', `${Math.round(y * 18)}px`);
  root.style.setProperty('--pointer-side-x', `${Math.round(x * -16)}px`);
  root.style.setProperty('--pointer-side-y', `${Math.round(y * -12)}px`);
  root.style.setProperty('--pointer-soft-x', `${Math.round(x * 10)}px`);
  root.style.setProperty('--pointer-soft-x-neg', `${Math.round(x * -10)}px`);
  root.style.setProperty('--pointer-soft-y', `${Math.round(y * 8)}px`);
}

function resetPointerMotion() {
  root.style.setProperty('--pointer-main-x', '0px');
  root.style.setProperty('--pointer-main-y', '0px');
  root.style.setProperty('--pointer-side-x', '0px');
  root.style.setProperty('--pointer-side-y', '0px');
  root.style.setProperty('--pointer-soft-x', '0px');
  root.style.setProperty('--pointer-soft-x-neg', '0px');
  root.style.setProperty('--pointer-soft-y', '0px');
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
heroStage?.addEventListener('pointermove', updatePointerMotion);
heroStage?.addEventListener('pointerleave', resetPointerMotion);
updateMotion();
