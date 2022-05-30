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
const placeViewPopupCloseButton = placeViewPopup.querySelector('.popup__close-button');

//инициализация галереи
function createElement(link, name) {
  const newElement = elementTemplate.querySelector('.element').cloneNode(true);
  const image = newElement.querySelector('.element__photo');
  image.src = link;
  image.alt = name;
  image.addEventListener('click', openPopupPopupPlaceView);
  newElement.querySelector('.element__footer-text').textContent = name;

  const likeButton = newElement.querySelector('.element__like-button');
  likeButton.addEventListener('click', () => likeButton.classList.toggle('element__like-button_active'));

  const removeCardButton = newElement.querySelector('.element__remove-button');
  removeCardButton.addEventListener('click', removeCard);

  return newElement;
}

function initElements() {
  initialCards.forEach((item) => {
    elements.append(createElement(item.link, item.name));
  })
}

initElements();

// общие функции
function closePopupByEsc(event){
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}
function closePopupOverlay(event){
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
}

function closePopup(popup) {
  document.removeEventListener('keydown', closePopupByEsc);
  popup.removeEventListener('click', closePopupOverlay);
  popup.classList.remove('popup_opened');
}

function openPopup(popup) {
  document.addEventListener('keydown', closePopupByEsc);
  popup.addEventListener('click', closePopupOverlay);
  popup.classList.add('popup_opened');
}

function resetPopupForm(popup){
  const formElement = popup.querySelector('.popup__form');
  formElement.reset();
  const fieldElements = Array.from(formElement.querySelectorAll('.popup__field'));
  fieldElements.forEach(function(field){
    const errorElement = field.querySelector('.popup__input-error');
    errorElement.textContent = '';
  })
}

//редактирование профиля
function openProfileEditPopup() {
  resetPopupForm(profileEditPopup);
  profileEditNameInput.value = profileName.textContent;
  profileEditActivityInput.value = profileActivity.textContent;
  openPopup(profileEditPopup);
}

function submitProfileEditPopup(event) {
  event.preventDefault();
  profileName.textContent = profileEditNameInput.value;
  profileActivity.textContent = profileEditActivityInput.value;
  closePopup(profileEditPopup);
}

function closeProfileEditPopup(event) {
  event.preventDefault();
  closePopup(profileEditPopup);
}

//добавление карточки в галерею
function openPopupPlaceAdd() {
  resetPopupForm(placeAddPopup);
  openPopup(placeAddPopup);
}

function closePopupPlaceAdd(){
  closePopup(placeAddPopup);
}

function submitPlaceAddPopup(event) {
  event.preventDefault();
  elements.prepend(createElement(placeAddInputLink.value, placeAddInputName.value));
  closePopup(placeAddPopup)
}

function cancelClose(event){
  event.stopPropagation();
}

//всплываюшая картинка
function openPopupPopupPlaceView(event){
  const photo = popupPlaceView.querySelector('.popup__photo');
  const title = popupPlaceView.querySelector('.popup__photo-name');
  const parentElement = event.target.closest('.element');
  photo.src = event.target.src;
  photo.alt = event.target.alt;
  title.textContent = parentElement.querySelector('.element__footer-text').textContent;
  openPopup(popupPlaceView);
}

function closePopupPlaceView(){
  closePopup(popupPlaceView);
}

function removeCard(event) {
  event.target.closest('.element').remove();
}

// добавление слушателей
profileEditOpenButton.addEventListener('click', openProfileEditPopup);
profileEditPopupForm.addEventListener('submit', submitProfileEditPopup);
profileEditCloseButton.addEventListener('click', closeProfileEditPopup);
profileEditPopupContainer.addEventListener('click', cancelClose)

placeAddOpenButton.addEventListener('click', openPopupPlaceAdd);
placeAddPopupForm.addEventListener('submit', submitPlaceAddPopup);
placeAddPopupCloseButton.addEventListener('click', closePopupPlaceAdd);
placeAddPopupContainer.addEventListener('click', cancelClose)

placeViewPopupCloseButton.addEventListener('click', closePopupPlaceView);