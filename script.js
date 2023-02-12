
const hamburgerButton = document.querySelector("#hamburger");
const closeHamburgerButton = document.querySelector(".closeMenu");
const hamburgerMenu = document.querySelector('.slideOutNav');
const navOptions = document.querySelector('.desktopMenu');

hamburgerButton.addEventListener('click', (event) => {
    hamburgerMenu.classList.add('open');
});

closeHamburgerButton.addEventListener('click', (event) => {
    hamburgerMenu.classList.remove('open');
});

navOptions.addEventListener('click', (event)=>{
    hamburgerMenu.classList.remove('open');
});


