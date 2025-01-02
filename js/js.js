const burgerMenu = document.querySelector(".burgermenu");
const navLinks = document.querySelector(".navlinks ul");

burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("show"); // Tilføjer/fjerner klassen "show" for navigationen
  burgerMenu.classList.toggle("open"); // Tilføjer/fjerner klassen "open" for at ændre burgermenuens udseende
});
