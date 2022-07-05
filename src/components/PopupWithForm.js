import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._savebutton = this._popup.querySelector('.popup__save-button');
  }

  _getInputValues = (e) => {
    // метод собирает данные всех полей формы
    this._inputsData = Object.fromEntries(new FormData(e.target));
  }

  setFormValues(data) {
    Object.keys(data).forEach(key => {
      if (this._form.elements[key]) {
        this._form.elements[key].value = data[key];
      }
    });
  }

  getFormName() {
    return this._form.getAttribute('name');
  }

  _onSubmit = (e) => {
    e.preventDefault();
    this._getInputValues(e);
    this._handleSubmit(this._inputsData);
    this._savebutton.textContent = 'Cохранение...';
    this.close();

  }

  setEventListeners = () => {
    this._form.addEventListener('submit', this._onSubmit);
    super.setEventListeners();
  }

  open() {
    this._savebutton.textContent = 'Cохранить';
    super.open();
  }

  close = () => {
    this._form.reset();
    super.close();
  }
}