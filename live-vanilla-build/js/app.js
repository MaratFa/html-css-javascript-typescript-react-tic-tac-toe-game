const App = {
  // All of our selected HTML elements
  $: {
    menu: document.querySelector('[data-id="menu"]'),
    menuItems: document.querySelector('[data-id="menu-items"]'),
    resetBtn: document.querySelector('[data-id="reset-btn"]'),
    newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
  },

  init() {
    App.$.menu.addEventListener("click", () => {
      App.$.menuItems.classList.toggle("hidden");
    });
  },
};

window.addEventListener("load", App.init);
