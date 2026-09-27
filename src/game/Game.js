start() {
  this.isStarted = true;
  
  if (this.input) {
    this.input.requestLock();
  }

  // Ativa os controles virtuais na tela se estiver no celular
  if (this.mobileControls) {
    this.mobileControls.show();
  }
}
