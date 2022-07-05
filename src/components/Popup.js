export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector('.popup__close-button');
    this._popupContainer = this._popup.querySelector('.popup__container');
    // this._handleEscClose = this._handleEscClose.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this._handleCancelClose = this._handleCancelClose.bind(this);
  }

  _handleEscClose = (event) => {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  _handleCancelClose = (event) => {
    event.stopPropagation();
  }

  setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popupContainer.addEventListener('click', this._handleCancelClose);
    this._popup.addEventListener('click', this.close);
    this._closeButton.addEventListener('click', this.close);
  }

  _removeEventListeners() {
    this._popupContainer.removeEventListener('click', this._handleCancelClose);
    this._popup.removeEventListener('click', this.close);
    this._closeButton.removeEventListener('click', this.close);
    document.removeEventListener('keydown', this._handleEscClose);
  }

  open() {
    this.setEventListeners();
    this._popup.classList.add('popup_opened');
  }

  close(){
    this._popup.classList.remove('popup_opened');
    this._removeEventListeners();
  }

}