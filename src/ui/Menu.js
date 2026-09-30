export class Menu {
  constructor(game) {
    this.game = game;
    this.container = document.getElementById('menu-overlay');
    
    this.init();
  }

  init() {
    // Esconde a interface do menu
    this.hide();

    // Inicia o jogo diretamente sem esperar por cliques
    if (this.game && typeof this.game.start === 'function') {
      this.game.start();
    }
  }

  show() {
    if (this.container) this.container.style.display = 'flex';
  }

  hide() {
    if (this.container) this.container.style.display = 'none';
  }
}
