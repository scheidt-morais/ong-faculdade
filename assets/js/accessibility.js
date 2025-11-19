
(function(){
  const btnContrast = () => document.getElementById('btn-contrast');
  const btnTheme = () => document.getElementById('btn-theme');

  function init() {
    if (!btnContrast() || !btnTheme()) return;

    btnContrast().addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
      const pressed = document.body.classList.contains('high-contrast');
      btnContrast().setAttribute('aria-pressed', String(pressed));
    });

    btnTheme().addEventListener('click', () => {
      document.body.classList.toggle('theme-dark');
      const pressed = document.body.classList.contains('theme-dark');
      btnTheme().setAttribute('aria-pressed', String(pressed));
    });


    const skip = document.querySelector('.skip-link');
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') skip.style.left = '10px';
    });
    document.addEventListener('click', () => { skip.style.left = '-9999px'; });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
