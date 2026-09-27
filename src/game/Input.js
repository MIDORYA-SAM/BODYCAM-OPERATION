export class Input {
  constructor(game) {
    this.game = game;
    // Detecta se o usuário está em um dispositivo móvel (iOS / Android)
    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || ('ontouchstart' in window);
    
    this.keys = {};
    this.mouse = { x: 0, y: 0, deltaX: 0, deltaY: 0, isLocked: false };
    
    this.init();
  }

  init() {
    window.addEventListener('keydown', (e) => this.keys[e.code] = true);
    window.addEventListener('keyup', (e) => this.keys[e.code] = false);

    // Só ativa eventos de ponteiro de mouse se NÃO for celular
    if (!this.isMobile) {
      document.addEventListener('pointerlockchange', () => {
        this.mouse.isLocked = document.pointerLockElement === document.body;
      });
    }
  }

  requestLock() {
    // No iPhone/Celular ignora a solicitação para não travar o jogo
    if (!this.isMobile && document.body.requestPointerLock) {
      try {
        document.body.requestPointerLock();
      } catch (err) {
        console.warn('Pointer lock não suportado:', err);
      }
    }
  }
}
