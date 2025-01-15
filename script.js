document.addEventListener("DOMContentLoaded", () => {
  // Gestion des boutons pour changer de langue
  const frBtn = document.getElementById("fr-btn");
  const enBtn = document.getElementById("en-btn");

  // Fonction pour changer la langue
  function switchLanguage(lang) {
    document.querySelectorAll("[data-fr]").forEach((element) => {
      if (lang === "fr") {
        if (element.tagName === "A") {
          // Pour les liens, met à jour l'attribut href
          element.setAttribute("href", element.getAttribute("data-fr"));
        } else {
          // Sinon, met à jour le contenu textuel
          element.textContent = element.getAttribute("data-fr");
        }
      } else if (lang === "en") {
        if (element.tagName === "A") {
          // Pour les liens, met à jour l'attribut href
          element.setAttribute("href", element.getAttribute("data-en"));
        } else {
          // Sinon, met à jour le contenu textuel
          element.textContent = element.getAttribute("data-en");
        }
      }
    });
  }

  // Écouteurs pour les boutons
  frBtn.addEventListener("click", () => switchLanguage("fr"));
  enBtn.addEventListener("click", () => switchLanguage("en"));

  // Gestion du menu hamburger
  const menuIcon = document.querySelector('#menu-icon');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuIcon && navLinks) { // Vérifie que les éléments existent
    menuIcon.onclick = () => {
      navLinks.classList.toggle('active');
    };
  }
});
