export class Menu {
  constructor(game) {
    this.game = game;
    this.container = document.getElementById('menu-overlay');
    this.startButton = document.getElementById('btn-start');
    
    this.init();
  }

  init() {
    if (this.startButton) {
      // Usa touchend e click para garantir resposta imediata no celular
      const handleStart = (e) => {
        e.preventDefault();
        this.hide();
        if (this.game && typeof this.game.start === 'function') {
          this.game.start();
        }
      };

      this.startButton.addEventListener('click', handleStart);
    }
  }

  show() {
    if (this.container) this.container.style.display = 'flex';
  }

  hide() {
    if (this.container) this.container.style.display = 'none';
  }
}
