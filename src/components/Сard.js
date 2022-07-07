export class Card {
  constructor(cardData, cardSelector, handleCardClick, handlerCardRemove, handleCardLike) {
    this._cardId = cardData._id;
    this._owner = cardData.owner;
    this._name = cardData.name;
    this._link = cardData.link;
    this._likes = cardData.likes;
    this._selector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handlerCardRemove = handlerCardRemove;
    this._handleCardLike = handleCardLike;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._selector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  getLikes() {
    return this._likes;
  }

  updateLikes(data) {
    this._likes = data.likes;
    this._element.likesCounter.textContent = this._likes.length;
    this._element.likeButton.classList.toggle('element__like-button_active', data.isLike);
  }

  _handleRemoveCard() {
    this._element.remove();
    // this._element = null;
    this._cardId = null;
  }

  _setEventListeners() {
    this._element.likeButton.addEventListener('click', () => {
      this._handleCardLike(this);
    });
    this._element.removeButton.addEventListener('click', () => {
      this._handlerCardRemove(this._cardId, this._handleRemoveCard.bind(this));
    });
    this._element.photo.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  generateCard(myId) {
    this._element = this._getTemplate();
    this._element.likeButton = this._element.querySelector('.element__like-button');
    this._element.removeButton = this._element.querySelector('.element__remove-button');
    this._element.photo = this._element.querySelector('.element__photo');
    this._element.cardTitle = this._element.querySelector('.element__footer-text');
    this._element.likesCounter = this._element.querySelector('.element__likesCounter');

    if (this._owner._id != myId) {
      this._element.removeButton.remove();
    }

    const isLiked = this._likes.some((user) => { return user._id == myId });
    if (isLiked) {
      this._element.likeButton.classList.add('element__like-button_active');
    }

    this._setEventListeners();
    this._element.photo.src = this._link;
    this._element.photo.alt = this._name;
    this._element.cardTitle.textContent = this._name;
    this._element.likesCounter.textContent = this._likes.length;

    return this._element;
  }

}