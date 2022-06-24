export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector('.popup__close-button');
    // console.log(this);
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
    document.addEventListener('keydown', this._handleEscClose.bind(this));
    this._popupContainer.addEventListener('click', this._handleCancelClose.bind(this));
    this._popup.addEventListener('click', this.close.bind(this));
    this._closeButton.addEventListener('click', this.close.bind(this));
  }

  open = () => {
    this.setEventListeners();
    this._popup.classList.add('popup_opened');
  }

  close(){
    this._popupContainer.removeEventListener('click', this._handleClosePopupOverlay);
    this._popup.classList.remove('popup_opened');
    this._closeButton.removeEventListener('click', this.close);
    document.removeEventListener('keydown', this._handleEscClose);
  }

}