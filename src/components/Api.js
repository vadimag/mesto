export class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers,
    })
      .then(res => {
        if (res.ok){
          return res.json();
        }
        return Promise.reject('Ошибка получения карточек')
      })
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
    })
      .then(res => {
        if (res.ok){
          return res.json();
        }
        return Promise.reject('Ошибка получения информации о пользователе')
      })
  }

  updateUserInfo(data) {
    const body = JSON.stringify(data);
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body,
    })
      .then(res => {
        if (res.ok){
          return res.json();
        }
        return Promise.reject('Ошибка получения информации о пользователе')
      })
  }

  updateUserAvatar(data) {
    const body = JSON.stringify(data);
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body,
    })
      .then(res => {
        if (res.ok){
          return res.json();
        }
        return Promise.reject('Ошибка при обновлении аватара пользователя')
      })
  }

  addCard(data) {
    const body = JSON.stringify(data);
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body,
    })
      .then(res => {
        if (res.ok){
          return res.json();
        }
        return Promise.reject('Ошибка при добавлении новой карточки')
      })
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(res => {
        if (res.ok){
          return res.json();
        }
        return Promise.reject('Ошибка при удалении карточки')
      })
  }

  likeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
    })
      .then(res => {
        if (res.ok){
          return res.json();
        }
        return Promise.reject('Ошибка при добавлении лайка')
      })
  }

  dislikeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(res => {
        if (res.ok){
          return res.json();
        }
        return Promise.reject('Ошибка при удалении лайка')
      })
  }
}
