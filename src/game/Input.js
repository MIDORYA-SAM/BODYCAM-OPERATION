export class Input {
  constructor(game) {
    this.game = game;
    this.keys = {};
    // Variáveis do rato mantidas para não dar erro na câmara
    this.mouse = { x: 0, y: 0, deltaX: 0, deltaY: 0, isLocked: true };
    
    this.init();
  }

  init() {
    window.addEventListener('keydown', (e) => this.keys[e.code] = true);
    window.addEventListener('keyup', (e) => this.keys[e.code] = false);
    
    // Removido totalmente o código de pointerLock (bloqueio de rato) 
    // que causa bloqueios e ecrãs brancos no iPhone.
  }

  requestLock() {
    // Função mantida vazia para que o jogo não dê erro (crash) ao tentar chamá-la
    this.mouse.isLocked = true; 
  }
}
