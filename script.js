
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
