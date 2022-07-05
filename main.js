(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardId=e._id,this._owner=e.owner,this._name=e.name,this._link=e.link,this._likes=e.likes,this._selector=n,this._handleCardClick=r,this._handlerCardRemove=o,this._handleCardLike=i}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._selector).content.querySelector(".element").cloneNode(!0)}},{key:"_handleRemoveCard",value:function(){this._element.remove(),this._cardId=null}},{key:"_setEventListeners",value:function(){var e=this;this._element.likeButton.addEventListener("click",(function(){e._handleCardLike(e)})),this._element.removeButton.addEventListener("click",(function(){e._handlerCardRemove(e._cardId,e._handleRemoveCard.bind(e))})),this._element.photo.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"generateCard",value:function(e){return this._element=this._getTemplate(),this._element.likeButton=this._element.querySelector(".element__like-button"),this._element.removeButton=this._element.querySelector(".element__remove-button"),this._element.photo=this._element.querySelector(".element__photo"),this._element.cardTitle=this._element.querySelector(".element__footer-text"),this._element.likesCounter=this._element.querySelector(".element__likesCounter"),this._owner._id!=e&&this._element.removeButton.remove(),this._likes.some((function(t){return t._id==e}))&&this._element.likeButton.classList.add("element__like-button_active"),this._setEventListeners(),this._element.photo.src=this._link,this._element.photo.alt=this._name,this._element.cardTitle.textContent=this._name,this._element.likesCounter.textContent=this._likes.length,this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,r;return t=e,(r=[{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(e){var t=this;this.clear(),e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),i(this,"_handleCancelClose",(function(e){e.stopPropagation()})),this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close-button"),this._popupContainer=this._popup.querySelector(".popup__container"),this.open=this.open.bind(this),this.close=this.close.bind(this),this._handleCancelClose=this._handleCancelClose.bind(this)}var t,n;return t=e,(n=[{key:"setEventListeners",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popupContainer.addEventListener("click",this._handleCancelClose),this._popup.addEventListener("click",this.close),this._closeButton.addEventListener("click",this.close)}},{key:"_removeEventListeners",value:function(){this._popupContainer.removeEventListener("click",this._handleCancelClose),this._popup.removeEventListener("click",this.close),this._closeButton.removeEventListener("click",this.close),document.removeEventListener("keydown",this._handleEscClose)}},{key:"open",value:function(){this.setEventListeners(),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),this._removeEventListeners()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function s(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return l(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(n);if(r){var o=h(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return s(this,e)});function i(e){var t,n,r,a,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),c=function(e,r){n._photo.src=r,n._photo.alt=e,n._text.textContent=e,f((t=l(n),h(i.prototype)),"open",t).call(t)},(a="open")in(r=l(n=o.call(this,e)))?Object.defineProperty(r,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):r.open=c,n._popupContainer=n._popup.querySelector(".popup__photo-container"),n._photo=n._popup.querySelector(".popup__photo"),n._text=n._popup.querySelector(".popup__photo-name"),n}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(a);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function b(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e,t){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),C(v(o=i.call(this,e)),"_getInputValues",(function(e){o._inputsData=Object.fromEntries(new FormData(e.target))})),C(v(o),"_onSubmit",(function(e){e.preventDefault(),o._getInputValues(e),o._handleSubmit(o._inputsData),o._savebutton.textContent="Cохранение...",o.close()})),C(v(o),"setEventListeners",(function(){o._form.addEventListener("submit",o._onSubmit),k((n=v(o),w(a.prototype)),"setEventListeners",n).call(n)})),C(v(o),"close",(function(){o._form.reset(),k((r=v(o),w(a.prototype)),"close",r).call(r)})),o._handleSubmit=t,o._form=o._popup.querySelector(".popup__form"),o._savebutton=o._popup.querySelector(".popup__save-button"),o}return t=a,(n=[{key:"setFormValues",value:function(e){var t=this;Object.keys(e).forEach((function(n){t._form.elements[n]&&(t._form.elements[n].value=e[n])}))}},{key:"getFormName",value:function(){return this._form.getAttribute("name")}},{key:"open",value:function(){this._savebutton.textContent="Cохранить",k(w(a.prototype),"open",this).call(this)}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(a);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t,n){return t&&O(e.prototype,t),n&&O(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=j((function e(t){var n=this,r=t.nameElementSelector,o=t.aboutElementSelector,i=t.avatarElementSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),S(this,"getUserInfo",(function(){return{name:n._name.textContent,about:n._about.textContent,avatar:n._avatar.src}})),S(this,"setUserInfo",(function(e){n._name.textContent=e.name,n._about.textContent=e.about,n._avatar.src=e.avatar})),this._name=document.querySelector(r),this._about=document.querySelector(o),this._avatar=document.querySelector(i)}));function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._settings=t,this._form=n}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._settings.inputErrorClass),n.textContent=t,n.classList.add(this._settings.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._settings.inputErrorClass),t.classList.remove(this._settings.errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._submitButton.classList.add(this._settings.inactiveButtonClass),this._submitButton.disabled=!0):(this._submitButton.classList.remove(this._settings.inactiveButtonClass),this._submitButton.disabled=!1)}},{key:"resetValidation",value:function(){var e=this;this._form.reset(),this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._inputList=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),this._submitButton=this._form.querySelector(this._settings.submitButtonSelector),this._setEventListeners()}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка получения карточек")}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка получения информации о пользователе")}))}},{key:"updateUserInfo",value:function(e){var t=JSON.stringify(e);return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:t}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка получения информации о пользователе")}))}},{key:"updateUserAvatar",value:function(e){var t=JSON.stringify(e);return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:t}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка при обновлении аватара пользователя")}))}},{key:"addCard",value:function(e){var t=JSON.stringify(e);return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:t}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка при добавлении новой карточки")}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка при удалении карточки")}))}},{key:"likeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка при добавлении лайка")}))}},{key:"dislikeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка при удалении лайка")}))}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=x(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},U.apply(this,arguments)}function x(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}function A(e,t){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},A(e,t)}function D(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}var H,N,F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return D(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._confirmButton=t._popup.querySelector(".popup__confirm-button"),t}return t=a,(n=[{key:"_actionHandler",value:function(){this._data.deleteCardApi(this._data.cardId,this._data.removeCardElement),this.close()}},{key:"close",value:function(){this._confirmButton.removeEventListener("click",this._actionHandler),U(V(a.prototype),"close",this).call(this)}},{key:"setActionHandler",value:function(e){this._data=e,this._confirmButton.addEventListener("click",this._actionHandler.bind(this))}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(a);function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var M=new R({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-44",headers:{authorization:"02408a14-4ba7-45e3-a06b-e7ad9d9d7fe6","Content-Type":"application/json"}}),G=new P({nameElementSelector:".profile__name",aboutElementSelector:".profile__activity",avatarElementSelector:".profile__avatar"});function z(e){return new t(e,"#elementTemplate",te,$,Q).generateCard(H)}function $(e,t){X.setActionHandler({cardId:e,removeCardElement:t,deleteCardApi:K}),X.open()}function K(e,t){M.deleteCard(e).then((function(e){"пост удалён"==e.message.toLowerCase()&&(t(),t=null)})).catch((function(e){console.log(e)}))}function Q(e){var t=this;e._likes.some((function(e){return e._id==H}))?M.dislikeCard(e._cardId).then((function(e){t._likes=e.likes,t._element.likesCounter.textContent=t._likes.length,t._element.likeButton.classList.remove("element__like-button_active")})).catch((function(e){console.log(e)})):M.likeCard(e._cardId).then((function(e){t._likes=e.likes,t._element.likesCounter.textContent=t._likes.length,t._element.likeButton.classList.add("element__like-button_active")})).catch((function(e){console.log(e)}))}Promise.all([M.getUserInfo(),M.getCards()]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return J(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],a=o[1];H=i._id,G.setUserInfo(i),(N=new r((function(e){N.addItem(z(e))}),".elements")).renderItems(a)})).catch((function(e){console.log(e)}));var W=new d("#popupPlaceView"),X=new F("#popupDeleteCardConfirm"),Y=new E("#popupAvatarUpdate",(function(e){M.updateUserAvatar(e).then((function(e){G.setUserInfo(e)})).catch((function(e){console.log(e)}))})),Z=new E("#popupProfileEdit",(function(e){M.updateUserInfo(e).then((function(e){G.setUserInfo(e)}))})),ee=new E("#popupPlaceAdd",(function(e){var t=e.name,n=e.placeURL;M.addCard({name:t,link:n}).then((function(e){N.addItem(z(e))})).catch((function(e){console.log(e)}))}));function te(e,t){W.open(e,t)}var ne,re={},oe=function(e){re[e].resetValidation()},ie=document.querySelector(".profile__edit-button"),ae=document.querySelector(".profile__place-add-button");document.querySelector(".profile__overlay").addEventListener("click",(function(){oe(Y.getFormName()),Y.open()})),ie.addEventListener("click",(function(){oe(Z.getFormName()),Z.setFormValues(G.getUserInfo()),Z.open()})),ae.addEventListener("click",(function(){oe(ee.getFormName()),ee.open()})),ne={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"},Array.from(document.querySelectorAll(ne.formSelector)).forEach((function(e){var t=new I(ne,e),n=e.getAttribute("name");re[n]=t,t.enableValidation()}))})();