document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('themeToggle');
  const darkIcon = themeToggle.querySelector('svg:not(.hidden)');
  const lightIcon = themeToggle.querySelector('svg.hidden');

  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    darkIcon.classList.toggle('hidden');
    lightIcon.classList.toggle('hidden');
  });

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark'); // Establece el modo oscuro por defecto
    darkIcon.classList.remove('hidden');
    lightIcon.classList.add('hidden');
  } else {
    darkIcon.classList.add('hidden');
    lightIcon.classList.remove('hidden');
  }
});
