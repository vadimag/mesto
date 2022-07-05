import { Popup } from './Popup.js';

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._confirmButton = this._popup.querySelector('.popup__confirm-button');
  }

  _actionHandler() {
    this._data.deleteCardApi(this._data.cardId, this._data.removeCardElement);
    this.close();
  }

  close() {
    this._confirmButton.removeEventListener('click', this._actionHandler);
    super.close();
  }


  setActionHandler(data) {
    this._data = data;
    this._confirmButton.addEventListener('click', this._actionHandler.bind(this));
  }

}