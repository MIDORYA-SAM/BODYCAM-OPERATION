export class Menu {
  constructor(onStartCallback, onSettingsChangeCallback) {
    this.menuEl = document.getElementById('main-menu');
    this.startBtn = document.getElementById('btn-start');
    this.settingsBtn = document.getElementById('btn-settings');
    this.backSettingsBtn = document.getElementById('btn-back-settings');
    
    this.menuButtonsContainer = document.getElementById('menu-buttons');
    this.settingsPanel = document.getElementById('settings-panel');

    this.sensSlider = document.getElementById('sens-slider');
    this.volumeSlider = document.getElementById('volume-slider');
    this.bodycamToggle = document.getElementById('bodycam-toggle');

    // Botão Iniciar
    this.startBtn.addEventListener('click', () => {
      this.hide();
      onStartCallback();
    });

    // Abrir Configurações
    this.settingsBtn.addEventListener('click', () => {
      this.menuButtonsContainer.style.display = 'none';
      this.settingsPanel.style.display = 'flex';
    });

    // Voltar das Configurações
    this.backSettingsBtn.addEventListener('click', () => {
      this.settingsPanel.style.display = 'none';
      this.menuButtonsContainer.style.display = 'block';
    });

    // Eventos de alteração de configurações
    if (onSettingsChangeCallback) {
      this.sensSlider.addEventListener('input', (e) => {
        onSettingsChangeCallback('sensitivity', parseFloat(e.target.value) / 2500);
      });
      this.volumeSlider.addEventListener('input', (e) => {
        onSettingsChangeCallback('volume', parseFloat(e.target.value) / 100);
      });
      this.bodycamToggle.addEventListener('change', (e) => {
        onSettingsChangeCallback('bodycam', e.target.checked);
      });
    }
  }

  show() {
    this.menuEl.style.display = 'flex';
  }

  hide() {
    this.menuEl.style.display = 'none';
  }
}
