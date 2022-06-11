import { Card } from './Сard.js';
import { FormValidator } from './FormValidator.js';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const FORM_VALIDATION_SETTINGS = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
}

const elements = document.querySelector('.elements');

const profileName = document.querySelector('.profile__name');
const profileActivity = document.querySelector('.profile__activity');
const profileEditOpenButton = document.querySelector('.profile__edit-button');
const profileEditPopup = document.querySelector('#popupProfileEdit');
const profileEditPopupContainer = profileEditPopup.querySelector('.popup__container');
const profileEditPopupForm = profileEditPopup.querySelector('.popup__form');
const profileEditNameInput = profileEditPopupForm.querySelector('#popupProfile-name');
const profileEditActivityInput = profileEditPopupForm.querySelector('#popupProfile-activity');
const profileEditCloseButton = profileEditPopup.querySelector('.popup__close-button');

const placeAddOpenButton = document.querySelector('.profile__place-add-button');
const placeAddPopup = document.querySelector('#popupPlaceAdd');
const placeAddPopupContainer = placeAddPopup.querySelector('.popup__container');
const placeAddPopupForm = placeAddPopup.querySelector('.popup__form');
const placeAddInputName = placeAddPopupForm.querySelector('#popupPlace-name');
const placeAddInputLink = placeAddPopupForm.querySelector('#popupPlace-link');
const placeAddPopupCloseButton = placeAddPopup.querySelector('.popup__close-button');

const placeViewPopup = document.querySelector('#popupPlaceView');
const placeViewPopupContainer = placeViewPopup.querySelector('.popup__photo-container');
const placeViewPopupPhoto = placeViewPopup.querySelector('.popup__photo');
const placeViewPopupTitle = placeViewPopup.querySelector('.popup__photo-name');
const placeViewPopupCloseButton = placeViewPopup.querySelector('.popup__close-button');

// создание карточек
function createCard(item) {
  const card = new Card(item, '#elementTemplate', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

initialCards.forEach((item) => {
  elements.append(createCard(item));
});


// общие функции
function handleClosePopupByEsc(event) {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}
function handleClosePopupOverlay(event) {
  const openedPopup = document.querySelector('.popup_opened');
  closePopup(openedPopup);
}

function closePopup(popup) {
  document.removeEventListener('keydown', handleClosePopupByEsc);
  popup.removeEventListener('click', handleClosePopupOverlay);
  popup.classList.remove('popup_opened');
}

function openPopup(popup) {
  document.addEventListener('keydown', handleClosePopupByEsc);
  popup.addEventListener('click', handleClosePopupOverlay);
  popup.classList.add('popup_opened');
}

//редактирование профиля
function handleOpenProfileEditPopup() {
  formValidators['popupFormProfile'].resetValidation();
  profileEditNameInput.value = profileName.textContent;
  profileEditActivityInput.value = profileActivity.textContent;
  openPopup(profileEditPopup);
}

function handleSubmitProfileEditPopup(event) {
  event.preventDefault();
  profileName.textContent = profileEditNameInput.value;
  profileActivity.textContent = profileEditActivityInput.value;
  closePopup(profileEditPopup);
}

function handleCloseProfileEditPopup() {
  closePopup(profileEditPopup);
}

//добавление карточки в галерею
function handleOpenPopupPlaceAdd() {
  formValidators['popupFormPlace'].resetValidation();
  openPopup(placeAddPopup);
}

function handleClosePopupPlaceAdd() {
  closePopup(placeAddPopup);
}

function handleSubmitPlaceAddPopup(event) {
  event.preventDefault();
  const cardData = { link: placeAddInputLink.value, name: placeAddInputName.value };
  elements.prepend(createCard(cardData));
  closePopup(placeAddPopup)
}

function handleCancelClose(event) {
  event.stopPropagation();
}

//всплываюшая картинка
function handleCardClick(name, link) {
  placeViewPopupPhoto.src = link;
  placeViewPopupPhoto.alt = name;
  placeViewPopupTitle.textContent = name;
  openPopup(popupPlaceView);
}

function handleClosePopupPlaceView() {
  closePopup(popupPlaceView);
}

// добавление слушателей
profileEditOpenButton.addEventListener('click', handleOpenProfileEditPopup);
profileEditPopupForm.addEventListener('submit', handleSubmitProfileEditPopup);
profileEditCloseButton.addEventListener('click', handleCloseProfileEditPopup);
profileEditPopupContainer.addEventListener('click', handleCancelClose)

placeAddOpenButton.addEventListener('click', handleOpenPopupPlaceAdd);
placeAddPopupForm.addEventListener('submit', handleSubmitPlaceAddPopup);
placeAddPopupCloseButton.addEventListener('click', handleClosePopupPlaceAdd);
placeAddPopupContainer.addEventListener('click', handleCancelClose)

placeViewPopupContainer.addEventListener('click', handleCancelClose);
placeViewPopupCloseButton.addEventListener('click', handleClosePopupPlaceView);

const formValidators = {}

// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');

    formValidators[formName] = validator;
   validator.enableValidation();
  });
};

enableValidation(FORM_VALIDATION_SETTINGS);