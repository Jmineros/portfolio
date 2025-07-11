const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

function setTheme(mode) {
  if (mode === 'light') {
    root.style.setProperty('--bg', '#ffffff');
    root.style.setProperty('--text', '#1a1a1a');
  } else {
    root.style.setProperty('--bg', '#0d1117');
    root.style.setProperty('--text', '#c9d1d9');
  }
  localStorage.setItem('theme', mode);
}

toggle.addEventListener('click', () => {
  const current = localStorage.getItem('theme') === 'light' ? 'dark' : 'light';
  setTheme(current);
});

setTheme(localStorage.getItem('theme') || 'dark');
