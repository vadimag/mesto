import { handleOpenPopupPlaceView } from './index.js';
export class Card {
  constructor(cardData, cardSelector) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._selector = cardSelector;
  }


  _getTemplate() {
    const cardElement = document
      .querySelector(this._selector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }


  _handleLikeAction() {
    this._element.likeButton.classList.toggle('element__like-button_active');
  }


  _handleRemoveCard() {
    this._element.removeButton.closest('.element').remove();
  }


  _handleOpenPopupPlaceView() {
    handleOpenPopupPlaceView(this._link, this._name);
  }


  _setEventListeners() {
    this._element.likeButton.addEventListener('click', () => {
      this._handleLikeAction();
    });
    this._element.removeButton.addEventListener('click', () => {
      this._handleRemoveCard();
    });
    this._element.photo.addEventListener('click', () => {
      this._handleOpenPopupPlaceView()
    });
  }


  generateCard() {
    this._element = this._getTemplate();

    this._element.likeButton = this._element.querySelector('.element__like-button');
    this._element.removeButton = this._element.querySelector('.element__remove-button');
    this._element.photo = this._element.querySelector('.element__photo');
    this._element.cardTitle = this._element.querySelector('.element__footer-text');

    this._setEventListeners();
    this._element.photo.src = this._link
    this._element.cardTitle.textContent = this._name;

    return this._element;
  }

}