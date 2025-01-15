document.addEventListener("DOMContentLoaded", () => {
  // Gestion des boutons pour changer de langue
  const frBtn = document.getElementById("fr-btn");
  const enBtn = document.getElementById("en-btn");

  // Fonction pour changer la langue
  function switchLanguage(lang) {
    document.querySelectorAll("[data-fr]").forEach((element) => {
      if (lang === "fr") {
        if (element.tagName === "a") {
          // Pour les liens, met à jour l'attribut href
          element.innerHTML = ("href", element.getAttribute("data-fr"));
        } else {
          // Sinon, met à jour le contenu textuel
          element.innerHTML=element.getAttribute("data-fr");
          element.innerHTML=element.getAttribute("data-fr-text");
        }
      } else if (lang === "en") {
        if (element.tagName === "a") {
          // Pour les liens, met à jour l'attribut href
          element.innerHTML = ("href", element.getAttribute("data-en"));
        } else {
          // Sinon, met à jour le contenu textuel         
            element.innerHTML=element.getAttribute("data-en");
           element.innerHTML=element.getAttribute("data-en-text");
          
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
