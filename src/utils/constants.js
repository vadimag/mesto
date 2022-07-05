export const cardListSelector = '.elements';

export const API_CONFIG = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44',
  headers: {
    authorization: '02408a14-4ba7-45e3-a06b-e7ad9d9d7fe6',
    'Content-Type': 'application/json'
  }
};

export const FORM_VALIDATION_SETTINGS = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
}