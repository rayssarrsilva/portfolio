// Runs in <head> so the saved theme applies before the first paint (no flash).
try {
  var saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') document.documentElement.dataset.theme = saved;
} catch (e) {
  /* Storage blocked: follow the system setting. */
}
