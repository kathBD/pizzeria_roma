
const filterButtons = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');

    // Quitar clase activa de todos los botones
    filterButtons.forEach(b => b.classList.remove('active'));

    // Agregar clase activa al botón seleccionado
    btn.classList.add('active');

    // Mostrar u ocultar cards
    menuCards.forEach(card => {
      if (card.getAttribute('data-category') === category || category === 'all') {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});



