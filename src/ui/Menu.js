export class Menu {
  constructor(game) {
    this.game = game;
    this.container = document.getElementById('menu-overlay');
    
    this.init();
  }

  init() {
    // Força a remoção visual imediata
    if (this.container) {
      this.container.style.display = 'none';
    }

    // Espera 1 segundo para o mundo carregar e arranca o jogo
    setTimeout(() => {
      if (this.game && typeof this.game.start === 'function') {
        this.game.start();
      }
    }, 1000);
  }

  show() {
    // Anula a função show() para o menu nunca mais aparecer
    if (this.container) this.container.style.display = 'none';
  }

  hide() {
    if (this.container) this.container.style.display = 'none';
  }
}
