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

//инициализация галереи

let elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#elementTemplate').content;
const popupPlaceView = document.querySelector('#popupPlaceView');

function createElement(link, name) {
  let newElement = elementTemplate.querySelector('.element').cloneNode(true);

  let image = newElement.querySelector('.element__photo');
  image.src = link;
  image.addEventListener('click', openPopupPopupPlaceView);

  newElement.querySelector('.element__photo').alt = name;
  newElement.querySelector('.element__footer-text').textContent = name;

  let likeButton = newElement.querySelector('.element__like-button');
  likeButton.addEventListener('click', () => likeButton.classList.toggle('element__like-button_active'));

  let removeButton = newElement.querySelector('.element__remove-button');
  removeButton.addEventListener('click', function removeCard(event) {
    event.target.closest('.element').remove();
  });

  return newElement;
}

function initElements() {
  initialCards.forEach((item) => {
    elements.append(createElement(item.link, item.name));
  })
}

// общие функции

function openPopup(popup) {
  document.addEventListener('keydown', closePopupByEsc);
  popup.classList.add('popup_opened');
}

function closePopupByEsc(event){
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function closePopup(popup) {
  document.removeEventListener('keydown', closePopupByEsc);
  popup.classList.remove('popup_opened');
}

//редактирование профиля

let profileName = document.querySelector('.profile__name');
let profileActivity = document.querySelector('.profile__activity');
let profileEditOpenButton = document.querySelector('.profile__edit-button');
let profileEditPopup = document.querySelector('#popupProfileEdit');
let profileEditPopupForm = profileEditPopup.querySelector('.popup__form');
let profileEditNameInput = profileEditPopupForm.querySelector('#name');
let profileEditActivityInput = profileEditPopupForm.querySelector('#activity');
let profileEditSubmitButton = profileEditPopupForm.querySelector('.popup__save-button');
let profileEditCloseButton = profileEditPopup.querySelector('.popup__close-button');

function openProfileEditPopup() {
  profileEditNameInput.value = profileName.textContent;
  profileEditActivityInput.value = profileActivity.textContent;
  openPopup(profileEditPopup);
}

function submitProfileEditPopup(event) {
  event.preventDefault();
  profileName.textContent = profileEditNameInput.value;
  profileActivity.textContent = profileEditActivityInput.value;
  profileEditPopup.classList.remove('popup_opened')
}

profileEditOpenButton.addEventListener('click', openProfileEditPopup);
profileEditSubmitButton.addEventListener('click', (event) => submitProfileEditPopup(event));
profileEditCloseButton.addEventListener('click', () => profileEditPopup.classList.remove('popup_opened'));

//добавление карточки в галерею

let placeAddOpenButton = document.querySelector('.profile__place-add-button');
let placeAddPopup = document.querySelector('#popupPlaceAdd');
let placeAddPopupForm = placeAddPopup.querySelector('.popup__form');
let placeAddInputName = placeAddPopupForm.querySelector('#name');
let placeAddInputLink = placeAddPopupForm.querySelector('#image_link');
let placeAddPopupCloseButton = placeAddPopup.querySelector('.popup__close-button');
let placeAddPopupSubmitButton = placeAddPopupForm.querySelector('.popup__save-button');

function openPopupPlaceAdd() {
  placeAddPopupForm.reset();
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

placeAddOpenButton.addEventListener('click', openPopupPlaceAdd);
placeAddPopupSubmitButton.addEventListener('click', (event) => submitPlaceAddPopup(event));
placeAddPopupCloseButton.addEventListener('click', closePopupPlaceAdd);

//popup с картинкой

function openPopupPopupPlaceView(event){
  let photo = popupPlaceView.querySelector('.popup__photo');
  let title = popupPlaceView.querySelector('.popup__photo-name');
  let closeButton = popupPlaceView.querySelector('.popup__close-button');
  let parentElement = event.target.closest('.element');

  photo.src = event.target.src;
  photo.alt = event.target.alt;
  title.textContent = parentElement.querySelector('.element__footer-text').textContent;

  closeButton.addEventListener('click', closePopupPlaceView);
  openPopup(popupPlaceView);
}

function closePopupPlaceView(){
  closePopup(popupPlaceView);
}

initElements();