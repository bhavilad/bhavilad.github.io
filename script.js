// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Simple scroll-reveal for sections and cards
const revealTargets = document.querySelectorAll('.section, .file-card, .project-card, .stats');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
} else {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
}
