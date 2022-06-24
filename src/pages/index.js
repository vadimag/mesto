import { cardListSelector, initialCards } from '../utils/constants.js';
import './index.css';
import { Card } from '../components/Сard.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

// создание карточек
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#elementTemplate', openPopupWithImage);
    cardList.addItem(card.generateCard());
  }
}, cardListSelector);

// создание попапов
const placeViewPopup = new PopupWithImage('#popupPlaceView');

const profileEditPopup = new PopupWithForm('#popupProfileEdit', (data) => {
  userInfo.setUserInfo(data['profile-name'], data['work']);
});

const placeAddPopup = new PopupWithForm('#popupPlaceAdd', data => {
  const {name, placeURL: link}  = data;
  const card = new Card({name, link}, '#elementTemplate', openPopupWithImage);
  cardList.addItem(card.generateCard());
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

// добавление слушателей на кнопки
const profileEditOpenButton = document.querySelector('.profile__edit-button');
const placeAddOpenButton = document.querySelector('.profile__place-add-button');

profileEditOpenButton.addEventListener('click', profileEditPopup.open);
placeAddOpenButton.addEventListener('click', placeAddPopup.open);

cardList.renderItems();