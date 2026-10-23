// Two small enhancements. The page works without them.

// 1. Theme toggle: follows the system until the visitor chooses.
const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');

function currentTheme() {
  if (root.dataset.theme) return root.dataset.theme;
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function syncToggle() {
  if (!toggle) return;
  const dark = currentTheme() === 'dark';
  toggle.setAttribute('aria-pressed', String(dark));
}

if (toggle) {
  syncToggle();
  toggle.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      /* Not saved, still applied. */
    }
    syncToggle();
  });
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', syncToggle);
}

// 2. "Hiring for?": shows the frontend or the QA side of each project.
//    A link like /?for=qa opens with that view already chosen.
const filter = document.querySelector('[data-hiring]');

if (filter) {
  const target = document.getElementById('projects-list');
  const buttons = filter.querySelectorAll('button[data-value]');
  const status = filter.querySelector('[role="status"]');

  function choose(value, announce) {
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.value === value)));
    if (value === 'both') delete target.dataset.for;
    else target.dataset.for = value;
    if (announce && status) {
      const pressed = filter.querySelector('button[aria-pressed="true"]');
      status.textContent = pressed ? pressed.dataset.announce : '';
    }
  }

  filter.hidden = false;
  buttons.forEach((b) => b.addEventListener('click', () => choose(b.dataset.value, true)));

  const fromUrl = new URLSearchParams(location.search).get('for');
  choose(fromUrl === 'frontend' || fromUrl === 'qa' ? fromUrl : 'both', false);
}
