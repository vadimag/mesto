// объявление констант
const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#elementTemplate').content;

const profileName = document.querySelector('.profile__name');
const profileActivity = document.querySelector('.profile__activity');
const profileEditOpenButton = document.querySelector('.profile__edit-button');
const profileEditPopup = document.querySelector('#popupProfileEdit');
const profileEditPopupContainer = profileEditPopup.querySelector('.popup__container');
const profileEditPopupForm = profileEditPopup.querySelector('.popup__form');
const profileEditNameInput = profileEditPopupForm.querySelector('#popupProfile-name');
const profileEditActivityInput = profileEditPopupForm.querySelector('#popupProfile-activity');
const profileEditSubmitButton = profileEditPopupForm.querySelector('.popup__save-button');
const profileEditCloseButton = profileEditPopup.querySelector('.popup__close-button');

const placeAddOpenButton = document.querySelector('.profile__place-add-button');
const placeAddPopup = document.querySelector('#popupPlaceAdd');
const placeAddPopupContainer = placeAddPopup.querySelector('.popup__container');
const placeAddPopupForm = placeAddPopup.querySelector('.popup__form');
const placeAddInputName = placeAddPopupForm.querySelector('#popupPlace-name');
const placeAddInputLink = placeAddPopupForm.querySelector('#popupPlace-link');
const placeAddPopupCloseButton = placeAddPopup.querySelector('.popup__close-button');
const placeAddPopupSubmitButton = placeAddPopupForm.querySelector('.popup__save-button');

const placeViewPopup = document.querySelector('#popupPlaceView');
const placeViewPopupContainer = placeViewPopup.querySelector('.popup__photo-container');
const placeViewPopupPhoto = placeViewPopup.querySelector('.popup__photo');
const placeViewPopupTitle = placeViewPopup.querySelector('.popup__photo-name');
const placeViewPopupCloseButton = placeViewPopup.querySelector('.popup__close-button');

//инициализация галереи
function handleLikeAction(event){
  event.target.classList.toggle('element__like-button_active');
}
function createElement(card) {
  const newElement = elementTemplate.querySelector('.element').cloneNode(true);
  const image = newElement.querySelector('.element__photo');
  image.src = card.link;
  image.alt = card.name;
  image.addEventListener('click', () => handleOpenPopupPlaceView(card));
  newElement.querySelector('.element__footer-text').textContent = card.name;;

  const likeButton = newElement.querySelector('.element__like-button');
  likeButton.addEventListener('click', handleLikeAction);

  const removeCardButton = newElement.querySelector('.element__remove-button');
  removeCardButton.addEventListener('click', handleRemoveCard);

  return newElement;
}

function initElements() {
  initialCards.forEach((item) => {
    elements.append(createElement(item));
  })
}

initElements();

// общие функции
function handleClosePopupByEsc(event){
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}
function handleClosePopupOverlay(event){
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

function resetPopupForm(popup){
  const formElement = popup.querySelector('.popup__form');
  formElement.reset();
  const buttonElement = formElement.querySelector('.popup__save-button');
  buttonElement.disabled = true;
  buttonElement.classList.add('popup__save-button_disabled');
  const fieldElements = Array.from(formElement.querySelectorAll('.popup__field'));
  fieldElements.forEach(function(field){
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

function handleClosePopupPlaceAdd(){
  closePopup(placeAddPopup);
}

function handleSubmitPlaceAddPopup(event) {
  event.preventDefault();
  const card = {link: placeAddInputLink.value, name: placeAddInputName.value}
  elements.prepend(createElement(card));
  closePopup(placeAddPopup)
}

function handleCancelClose(event){
  event.stopPropagation();
}

//всплываюшая картинка
function handleOpenPopupPlaceView(card){
  placeViewPopupPhoto.src = card.link;
  placeViewPopupPhoto.alt = card.name;
  placeViewPopupTitle.textContent =card.name;
  openPopup(popupPlaceView);
}

function handleClosePopupPlaceView(){
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