export class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = form;
  }

  //отображение текста ошибки
  _showInputError(formElement, inputElement, errorMessage, params) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(params.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(params.errorClass);
  };

  //скрытие текста ошибки
  _hideInputError(formElement, inputElement, params) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(params.inputErrorClass);
    errorElement.classList.remove(params.errorClass);
    errorElement.textContent = '';
  };

  //проверка валидности введенного в инпут значения
  _checkInputValidity(formElement, inputElement, params) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage, params);
    } else {
      this._hideInputError(formElement, inputElement, params);
    }
  };

  //проверка валидности всех значений инпутов из списка
  _hasInvalidInput(inputList) {
    return inputList.some(function (inputElement) {
      return !inputElement.validity.valid;
    });
  }

  //включение/отключение кнопки сохранить
  _toggleButtonState(inputList, buttonElement, params) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(params.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(params.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

  // установка слушателей на ввод в инпуты формы
  _setEventListeners(formElement, params){
    const inputList = Array.from(formElement.querySelectorAll(params.inputSelector));
    const buttonElement = formElement.querySelector(params.submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement, params);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement, params);
        this._toggleButtonState(inputList, buttonElement, params);
      });
    });
  };

  enableValidation() {
    this._form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners(this._form, this._settings);
  }
}