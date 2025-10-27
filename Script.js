const hamburger = document.getElementById('hamburger');
const closeIcon = document.getElementById('close-icon');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  if (navLinks.classList.contains('active')) {
    closeIcon.src = 'Asset/close-icon.webp';
  } else {
    closeIcon.src = 'Asset/hamburger.svg';
  }
});
