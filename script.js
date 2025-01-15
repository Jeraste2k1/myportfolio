
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
        if (element.tagName === "A") {
          element.setAttribute("href", element.getAttribute("data-fr"));
        } else {
          element.textContent = element.getAttribute("data-fr");
        }
      } else if (lang === "en") {
        if (element.tagName === "A") {
          element.setAttribute("href", element.getAttribute("data-en"));
        } else {
          element.textContent = element.getAttribute("data-en");
        }
      }
    });
  }

  // Écouteurs pour les boutons
  frBtn.addEventListener("click", () => switchLanguage("fr"));
  enBtn.addEventListener("click", () => switchLanguage("en"));
});

  contactLink.href = contactLink.dataset[lang];
});

