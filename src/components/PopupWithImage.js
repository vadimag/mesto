import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupContainer = this._popup.querySelector('.popup__photo-container');
    this._photo = this._popup.querySelector('.popup__photo');
    this._text = this._popup.querySelector('.popup__photo-name');
  }

  open = (name, link) => {
    this._photo.src = link;
    this._photo.alt = name;
    this._text.textContent = name;
    super.open();
  }

}