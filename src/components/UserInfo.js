export class UserInfo{
  constructor({ nameElementSelector, aboutElementSelector}){
  this._name = document.querySelector(nameElementSelector);
  this._about = document.querySelector(aboutElementSelector);
  };

  getUserInfo = () => {
    return {
      "profile-name": this._name.textContent,
      "work": this._about.textContent
    };
  }

  setUserInfo = (name, about) => {
    this._name.textContent = name;
    this._about.textContent = about;
  }

}