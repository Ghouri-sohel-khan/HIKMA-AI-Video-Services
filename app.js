const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const filters = [...document.querySelectorAll('.filter')];
const cards = [...document.querySelectorAll('.work-card')];
filters.forEach((button) => button.addEventListener('click', () => {
  filters.forEach((item) => item.classList.toggle('active', item === button));
  const filter = button.dataset.filter;
  cards.forEach((card) => {
    const categories = card.dataset.category.split(' ');
    card.classList.toggle('is-hidden', filter !== 'all' && !categories.includes(filter));
  });
}));

const dialog = document.querySelector('.preview-dialog');
const dialogVideo = dialog.querySelector('.dialog-video');
const dialogTitle = dialog.querySelector('#dialog-title');
document.querySelectorAll('.poster[data-video]').forEach((poster) => poster.addEventListener('click', () => {
  dialogVideo.pause();
  dialogVideo.src = poster.dataset.video;
  dialogTitle.textContent = poster.dataset.title;
  dialogVideo.load();
  dialog.showModal();
  dialogVideo.play().catch(() => {});
}));
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener('close', () => {
  dialogVideo.pause();
  dialogVideo.removeAttribute('src');
  dialogVideo.load();
});

const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  }), { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
} else items.forEach((item) => item.classList.add('in-view'));

document.querySelector('#year').textContent = new Date().getFullYear();
