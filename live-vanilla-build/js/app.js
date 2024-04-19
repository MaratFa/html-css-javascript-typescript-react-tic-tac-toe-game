const App = {
  // All of our selected HTML elements
  $: {
    menu: document.querySelector('[data-id="menu"]'),
    menuItems: document.querySelector('[data-id="menu-items"]'),
    resetBtn: document.querySelector('[data-id="reset-btn"]'),
    newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
    squares: document.querySelectorAll('[data-id="square"'),
  },

  init() {
    App.registerEventListeners();
  },

  registerEventListeners() {
    // DONE 
    App.$.menu.addEventListener("click", () => {
      App.$.menuItems.classList.toggle("hidden");
    });

    // TODO
    App.$.resetBtn.addEventListener("click", () => {
      console.log("Reset the game");
    });

    // TODO
    App.$.newRoundBtn.addEventListener("click", () => {
      console.log("New");
    });

    // TODO
    App.$.squares.forEach((square) => {
      square.addEventListener("click", (event) => {
        console.log(event.target.id);
      });
    });
  },
};

window.addEventListener("load", App.init);
