export class UserInfo{
  constructor({ nameElementSelector, aboutElementSelector}){
  this._name = document.querySelector(nameElementSelector);
  this._about = document.querySelector(aboutElementSelector);
  };

  getUserInfo = () => {
    return this;
  }

  setUserInfo = (name, about) => {
    this._name.textContent = name;
    this._about.textContent = about;
  }

}