export class UserInfo{
  constructor({ nameElementSelector, aboutElementSelector, avatarElementSelector}){
  this._name = document.querySelector(nameElementSelector);
  this._about = document.querySelector(aboutElementSelector);
  this._avatar = document.querySelector(avatarElementSelector);
  };

  getUserInfo = () => {
    return {
      "name": this._name.textContent,
      "about": this._about.textContent,
      "avatar": this._avatar.src
    };
  }

  setUserInfo = (data) => {
    this._name.textContent = data.name;
    this._about.textContent = data.about;
    this._avatar.src = data.avatar;
  }

}