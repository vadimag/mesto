import { FORM_VALIDATION_SETTINGS } from '../utils/constants.js';
import { FormValidator } from './FormValidator.js';
import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._popupContainer = this._popup.querySelector('.popup__container');
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._validator = new FormValidator(FORM_VALIDATION_SETTINGS, this._form);
  }

  _getInputValues = (e) => {
    // метод собирает данные всех полей формы
    this._inputsData = Object.fromEntries(new FormData(e.target));
  }

  _onSubmit = (e) => {
    e.preventDefault();
    this._getInputValues(e);
    this._handleSubmit(this._inputsData);
    this.close();
  }

  setEventListeners = () => {
    this._form.addEventListener('submit', this._onSubmit);
    this._validator.enableValidation();
    super.setEventListeners();
  }

  close = () => {
    this._validator.resetValidation();
    super.close();
  }
}