export default class {
  constructor(selector) {
    this.element       = document.querySelector(selector);
    this.actionClose   = this.element.querySelector('[data-role="close"]');

    this.actionClose.addEventListener('click', this.closeModal.bind(this));
  }

  openModal() {
    this.element.showModal()
  }

  closeModal() {
    this.element.close();
  }
}