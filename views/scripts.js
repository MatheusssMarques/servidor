// Selecionando os elementos do DOM
const menuButton = document.querySelector(".menu-button");
const menuNav = document.querySelector(".menu-nav");
const nightModeButton = document.querySelector("#night-mode-button");
const nightModeInput = document.querySelector(".night-mode");

// Adicionando um evento de clique no botão de menu
menuButton.addEventListener("click", () => {
  // Alternando a classe active no menuNav
  menuNav.classList.toggle("active");
});

// Adicionando um evento de clique no botão de modo noturno
nightModeButton.addEventListener("click", () => {
  // Alternando o estado do checkbox do modo noturno
  nightModeInput.checked = !nightModeInput.checked;
});