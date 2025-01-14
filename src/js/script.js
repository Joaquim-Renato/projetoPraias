const hamburger = document.getElementById('hamburguer');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
