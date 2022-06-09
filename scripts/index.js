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

const VALIDATION_SETTINGS = {
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
initialCards.forEach((item) => {
  const card = new Card(item, '#elementTemplate');
  const cardElement = card.generateCard();
  elements.append(cardElement);
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

function resetPopupForm(popup) {
  const formElement = popup.querySelector('.popup__form');
  formElement.reset();
  const buttonElement = formElement.querySelector('.popup__save-button');
  buttonElement.disabled = true;
  buttonElement.classList.add('popup__save-button_disabled');
  const fieldElements = Array.from(formElement.querySelectorAll('.popup__field'));
  fieldElements.forEach(function (field) {
    const errorElement = field.querySelector('.popup__input-error');
    errorElement.textContent = '';
  })
}

//редактирование профиля
function handleOpenProfileEditPopup() {
  resetPopupForm(profileEditPopup);
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

function handleCloseProfileEditPopup(event) {
  event.preventDefault();
  closePopup(profileEditPopup);
}

//добавление карточки в галерею
function handleOpenPopupPlaceAdd() {
  resetPopupForm(placeAddPopup);
  openPopup(placeAddPopup);
}

function handleClosePopupPlaceAdd() {
  closePopup(placeAddPopup);
}

function handleSubmitPlaceAddPopup(event) {
  event.preventDefault();
  const cardData = { link: placeAddInputLink.value, name: placeAddInputName.value };
  const card = new Card(cardData, '#elementTemplate');
  elements.prepend(card.generateCard());
  closePopup(placeAddPopup)
}

function handleCancelClose(event) {
  event.stopPropagation();
}

//всплываюшая картинка
export function handleOpenPopupPlaceView(link, name) {
  placeViewPopupPhoto.src = link;
  placeViewPopupPhoto.alt = name;
  placeViewPopupTitle.textContent = name;
  openPopup(popupPlaceView);
}
function handleClosePopupPlaceView() {
  closePopup(popupPlaceView);
}

function handleRemoveCard(event) {
  event.target.closest('.element').remove();
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

// создание валидаторов форм
const formList = Array.from(document.querySelectorAll(VALIDATION_SETTINGS.formSelector));
formList.forEach((formElement) => {
  const formValidator = new FormValidator(VALIDATION_SETTINGS, formElement);
  formValidator.enableValidation();
});
