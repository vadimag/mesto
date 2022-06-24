import { FORM_VALIDATION_SETTINGS } from '../utils/constants.js';
import { cardListSelector, initialCards } from '../utils/constants.js';
import './index.css';
import { Card } from '../components/Сard.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { FormValidator } from '../components/FormValidator.js';

// создание карточек
function createCard(data){
  const card = new Card(data, '#elementTemplate', openPopupWithImage);
  return card.generateCard();
}

const cardList = new Section(
  (item) => {
    cardList.addItem(createCard(item));
  }, cardListSelector);

// создание попапов
const placeViewPopup = new PopupWithImage('#popupPlaceView');

const profileEditPopup = new PopupWithForm('#popupProfileEdit', (data) => {
  userInfo.setUserInfo(data['profile-name'], data['work']);
});

const placeAddPopup = new PopupWithForm('#popupPlaceAdd', data => {
  const {name, placeURL: link}  = data;
  cardList.addItem(createCard({name, link}));
});

// объект информации о пользователе
const userInfo = new UserInfo({
  nameElementSelector: ".profile__name",
  aboutElementSelector: ".profile__activity"
});

// обработчик всплывающей картинки
function openPopupWithImage(name, link) {
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

profileEditOpenButton.addEventListener('click', function(){
  resetValidation(profileEditPopup.getFormName());
  profileEditPopup.setFormValues(userInfo.getUserInfo());
  profileEditPopup.open();
});
placeAddOpenButton.addEventListener('click', function(){
  resetValidation(placeAddPopup.getFormName());
  placeAddPopup.open();
});


// start
cardList.renderItems(initialCards);
enableValidation(FORM_VALIDATION_SETTINGS);