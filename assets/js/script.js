const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

// BURGER MENU
menuBtn.addEventListener('click', ()=>{
    navMenu.classList.toggle('menu-height')
});
