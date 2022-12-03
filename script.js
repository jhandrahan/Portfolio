const app = {};

app.button = document.getElementById("hamburgerButton");
console.log(app.button);

app.mobileNav = document.querySelector(".desktopMenu");
console.log(app.mobileNav);

app.button.addEventListener("click", function () {

    app.mobileNav.classList.toggle('show');

})