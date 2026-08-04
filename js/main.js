// Función para cambiar entre pestañas de planes
function showPanel(panelName) {
  document.querySelectorAll('.plan-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-' + panelName).classList.add('active');
}

// Animación de entrada para tarjetas de "Cómo funciona"
document.addEventListener('DOMContentLoaded', function() {
  const stepCards = document.querySelectorAll('.step-card');
  if (stepCards.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });
    stepCards.forEach(card => observer.observe(card));
  }
});