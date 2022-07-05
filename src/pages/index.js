import { FORM_VALIDATION_SETTINGS } from '../utils/constants.js';
import { cardListSelector } from '../utils/constants.js';
import './index.css';
import { Card } from '../components/Сard.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { FormValidator } from '../components/FormValidator.js';
import { Api } from '../components/Api.js';
import { API_CONFIG } from '../utils/constants.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';

let myApiId;
let cardList;
const api = new Api(API_CONFIG);

// объект информации о пользователе
const userInfo = new UserInfo({
  nameElementSelector: ".profile__name",
  aboutElementSelector: ".profile__activity",
  avatarElementSelector: ".profile__avatar"
});

// создание карточек
function createCard(cardData) {
  const card = new Card(cardData, '#elementTemplate', viewCardHandler, removeCardHandler, likeCardHandler);
  return card.generateCard(myApiId);
}

Promise.all([api.getUserInfo(), api.getCards()])
  .then(([userData, cards]) => {
    myApiId = userData._id;
    userInfo.setUserInfo(userData);
    cardList = new Section(
      (item) => {
        cardList.addItem(createCard(item));
      }, cardListSelector);
    cardList.renderItems(cards);
  })
  .catch((err) => {
    console.log(err);
  });


// удаление карточки по нажатию на корзину
function removeCardHandler(cardId, removeCardElement) {
  popupDeleteCardConfirm.setActionHandler({ cardId, removeCardElement, deleteCardApi });
  popupDeleteCardConfirm.open();
}
function deleteCardApi(cardId, removeCardElement) {
  api.deleteCard(cardId)
    .then((res) => {
      if (res.message.toLowerCase() == "пост удалён") {
        removeCardElement();
        removeCardElement = null;
      }
    })
    .catch((res) => {
      console.log(res);
    });
}


// добавление-удаление лайка
function likeCardHandler(card) {
  const isLiked = card._likes.some((user) => { return user._id == myApiId });
  if (!isLiked) {
    api.likeCard(card._cardId)
      .then((res) => {
        this._likes = res.likes;
        this._element.likesCounter.textContent = this._likes.length;
        this._element.likeButton.classList.add('element__like-button_active');
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    api.dislikeCard(card._cardId)
      .then((res) => {
        this._likes = res.likes;
        this._element.likesCounter.textContent = this._likes.length;
        this._element.likeButton.classList.remove('element__like-button_active');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}


// создание попапов
const placeViewPopup = new PopupWithImage('#popupPlaceView');
const popupDeleteCardConfirm = new PopupWithConfirmation('#popupDeleteCardConfirm');

const updateAvatarPopup = new PopupWithForm('#popupAvatarUpdate', (data) => {
  api.updateUserAvatar(data)
    .then(res => {
      userInfo.setUserInfo(res)
    })
    .catch((err) => {
      console.log(err);
    });
});

const profileEditPopup = new PopupWithForm('#popupProfileEdit', (data) => {
  api.updateUserInfo(data)
    .then(res => {
      userInfo.setUserInfo(res);
    });
});

const placeAddPopup = new PopupWithForm('#popupPlaceAdd', data => {
  const { name, placeURL: link } = data;
  api.addCard({ name, link })
    .then((cardData) => {
      cardList.addItem(createCard(cardData));
    })
    .catch((err) => {
      console.log(err);
    });
});


// обработчик всплывающей картинки
function viewCardHandler(name, link) {
  placeViewPopup.open(name, link);
}


// Включение валидации
const formValidators = {}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

const resetValidation = (formName) => {
  formValidators[formName].resetValidation();
}


// добавление слушателей на кнопки
const profileEditOpenButton = document.querySelector('.profile__edit-button');
const placeAddOpenButton = document.querySelector('.profile__place-add-button');
const avatarUpdateButton = document.querySelector('.profile__overlay');

avatarUpdateButton.addEventListener('click', () => {
  resetValidation(updateAvatarPopup.getFormName());
  updateAvatarPopup.open();
});
profileEditOpenButton.addEventListener('click', () => {
  resetValidation(profileEditPopup.getFormName());
  profileEditPopup.setFormValues(userInfo.getUserInfo());
  profileEditPopup.open();
});
placeAddOpenButton.addEventListener('click', function () {
  resetValidation(placeAddPopup.getFormName());
  placeAddPopup.open();
});

// start
enableValidation(FORM_VALIDATION_SETTINGS);
