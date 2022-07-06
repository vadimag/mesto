export class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = form;
  }

  //отображение текста ошибки
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.errorClass);
  };

  //скрытие текста ошибки
  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.classList.remove(this._settings.errorClass);
    errorElement.textContent = '';
  };

  //проверка валидности введенного в инпут значения
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  //проверка валидности всех значений инпутов из списка
  _hasInvalidInput() {
    return this._inputList.some(function (inputElement) {
      return !inputElement.validity.valid;
    });
  }

  //включение/отключение кнопки сохранить
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(this._settings.inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._settings.inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }

  // сброс ошибок
  resetValidation(){
    this._toggleButtonState();
      this._inputList.forEach((inputElement) => {
        this._hideInputError(inputElement)
      });
  }

  // установка слушателей на ввод в инпуты формы
  _setEventListeners(){
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  enableValidation() {
    this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    this._submitButton = this._form.querySelector(this._settings.submitButtonSelector);
    this._setEventListeners();
  }
}