// Pilihan DOM
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

//Set Status Menu Awal
let tampilMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!tampilMenu) {
        menuBtn.classList.add('tutup');
        menu.classList.add('tampil');
        menuNav.classList.add('tampil');
        menuBranding.classList.add('tampil');
        navItems.forEach(item => item.classList.add('tampil'));

        //Set Status Menu
        tampilMenu = true;
    } else {
        menuBtn.classList.remove('tutup');
        menu.classList.remove('tampil');
        menuNav.classList.remove('tampil');
        menuBranding.classList.remove('tampil');
        navItems.forEach(item => item.classList.remove('tampil'));

        //Set Status Menu
        tampilMenu = false;
    }
}
