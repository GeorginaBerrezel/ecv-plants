// Activer/désactiver la classe "sticky" en fonction du défilement
function toggleStickyNavbar() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
        navbar.classList.add('bg-custom');
        console.log('La barre de navigation est en mode "sticky".');
    } else {
        navbar.classList.remove('sticky');
        navbar.classList.remove('bg-custom');
        console.log('La barre de navigation n\'est pas en mode "sticky".');
    }
}

window.addEventListener('scroll', toggleStickyNavbar);

toggleStickyNavbar();
