// const app = {};

// app.button = document.getElementById("hamburgerButton");
// // console.log(app.button);

// app.mobileNav = document.querySelector(".desktopMenu");
// // console.log(app.mobileNav);

// app.button.addEventListener("click", function () {

//     app.mobileNav.classList.toggle('show');

//     // app.button.classList.toggle('show');
// })
// document.querySelectorAll(".link").forEach(n => n.addEventListener('click', () => {
//     console.log(app.button);
//     app.button.classList.remove('show')
// }))

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".desktopMenu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("show");
    navMenu.classList.toggle("show");
})

document.querySelectorAll(".link").forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove("show");
    navMenu.classList.remove("show");
}))
