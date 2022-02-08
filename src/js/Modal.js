
export default class Modal {
  constructor(modal) {
    this.modal = modal;
    this.name = modal.dataset.modal;
    this.setListeners();
  }
  
  setListeners() {
    this.setGlobalOpenListener();
    this.setGlobalCloseListener();
    this.setResizeListener();
    this.setOrientationChangeListener();
  }

  setGlobalOpenListener() {
    document.addEventListener('click', (e) => {
      const target = e.target;
      const elem = target.closest(`[data-modal-open="${this.name}"]`);
      if (!elem) return;
      this.openModal();
    });
  }

  setGlobalCloseListener() {
    document.addEventListener('click', (e) => {
      const target = e.target;
      const elem = target.closest(`[data-modal-close="${this.name}"]`);
      if (!elem) return;
      this.closeModal();
    });
  }

  setResizeListener() {
    window.addEventListener('resize', (e) => {
      this.closeModalOnDesktop();
    });
  }

  setOrientationChangeListener() {
    window.addEventListener('orientationchange', (e) => {
      this.closeModalOnDesktop();
    });
  }

  openModal() {
    this.modal.classList.add('modal--active');
  }

  closeModal() {
    this.modal.classList.remove('modal--active');
  }

  closeModalOnDesktop() {
    if (window.innerWidth < 750) return;
    this.closeModal();
  }
}