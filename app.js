// Efecto parallax suave en las fotos del póster (se desactiva con "reducir movimiento")
const hero = document.querySelector('.hero');
const fotos = document.querySelectorAll('.foto');
const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (hero && !sinMovimiento) {
  hero.addEventListener('mousemove', (e) => {
    const r = hero.getBoundingClientRect();
    const dx = (e.clientX - r.left) / r.width - 0.5;
    const dy = (e.clientY - r.top) / r.height - 0.5;
    fotos.forEach((f) => {
      const p = Number(f.dataset.profundidad) || 0;
      f.style.transform = `translate(${dx * p}px, ${dy * p}px) rotate(${getComputedStyle(f).getPropertyValue('--giro')})`;
    });
  });
  hero.addEventListener('mouseleave', () => {
    fotos.forEach((f) => { f.style.transform = ''; });
  });
}

// Visor de galería: abre la foto ampliada en un <dialog>
const visor = document.querySelector('.visor');
const visorImg = visor.querySelector('img');

document.querySelectorAll('.galeria__item').forEach((btn) => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img');
    visorImg.src = img.src;
    visorImg.alt = img.alt;
    visor.showModal();
  });
});

visor.querySelector('.visor__cerrar').addEventListener('click', () => visor.close());
visor.addEventListener('click', (e) => { if (e.target === visor) visor.close(); });
