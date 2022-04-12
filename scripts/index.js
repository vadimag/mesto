let profileName = document.querySelector('.profile__name');
let profileActivity = document.querySelector('.profile__activity');
let editButton = document.querySelector('.profile__edit-button');

let popup = document.querySelector('.popup');
let popupForm = popup.querySelector('.popup__form');
let nameInput = popup.querySelector('#name');
let activityInput = popup.querySelector('#activity');
let closeButton = popup.querySelector('.popup__close-button');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  activityInput.value = profileActivity.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function submitPopup(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileActivity.textContent = activityInput.value;
  closePopup();
}

editButton.addEventListener('click', openPopup);
popupForm.addEventListener('submit', submitPopup);
closeButton.addEventListener('click', closePopup);
