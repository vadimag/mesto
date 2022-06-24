import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._popupContainer = this._popup.querySelector('.popup__container');
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector('.popup__form');
  }

  _getInputValues = (e) => {
    // метод собирает данные всех полей формы
    this._inputsData = Object.fromEntries(new FormData(e.target));
  }

  setFormValues(data){
    Object.keys(data).forEach( key => {
      this._form.elements[key].value = data[key];
    });
  }

  getFormName() {
    return this._form.getAttribute('name');
  }

  _onSubmit = (e) => {
    e.preventDefault();
    this._getInputValues(e);
    this._handleSubmit(this._inputsData);
    this.close();
  }

  setEventListeners = () => {
    this._form.addEventListener('submit', this._onSubmit);
    super.setEventListeners();
  }

  close = () => {
    this._form.reset();
    super.close();
  }
}