
function toggleTheme() {
  document.body.classList.toggle('dark');
}
function resizeText(action) {
  const root = document.documentElement;
  let current = parseFloat(window.getComputedStyle(root).fontSize);
  if(action === 'increase') root.style.fontSize = (current + 2) + 'px';
  if(action === 'decrease') root.style.fontSize = (current - 2) + 'px';
}
