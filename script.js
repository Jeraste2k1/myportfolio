
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
menuIcon.onclick= () => {
  navLinks.classList.toggle('active');
}


document.addEventListener("DOMContentLoaded", () => {
  const frBtn = document.getElementById("fr-btn");
  const enBtn = document.getElementById("en-btn");

  // Fonction pour changer la langue
  function switchLanguage(lang) {
    document.querySelectorAll("[data-fr]").forEach((element) => {
      if (lang === "fr") {
        element.textContent = element.getAttribute("data-fr");
      } else if (lang === "en") {
        element.textContent = element.getAttribute("data-en");
      }
    });
  }

  // Écouteurs pour les boutons
  frBtn.addEventListener("click", () => switchLanguage("fr"));
  enBtn.addEventListener("click", () => switchLanguage("en"));
});

