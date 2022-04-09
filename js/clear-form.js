import {mainPinMarker, LAT_TOKIO, LNG_TOKIO, map, removePopup, ZOOM} from './map.js';
import {getInitialValueSlider} from './get-slider-element.js';
import {getData} from './data.js';

const DEFAULT__SRC = 'img/muffin-grey.svg';
const formElement = document.querySelector('.ad-form');
const inputElements = formElement.querySelectorAll('input');
const photoElement = document.querySelector('.ad-form__photo');
const photoAvatarElement = document.querySelector('.ad-form-header__img');
const forms = document.querySelectorAll('.form');


const clearForm = () => {
  removePopup();
  map.setView({
    lat: LAT_TOKIO,
    lng: LNG_TOKIO,
  }, ZOOM);
  mainPinMarker.setLatLng([LAT_TOKIO, LNG_TOKIO]);
  getInitialValueSlider();
  forms.forEach((element) => {
    element.reset();
  });
  document.querySelector('#address').value = `${LAT_TOKIO  },${  LNG_TOKIO}`;
  inputElements.forEach(((input) => {
    if (input.matches('.ad-form__input-picture')) {
      photoElement.innerHTML = '';
      photoAvatarElement.src = DEFAULT__SRC;
      input.src = '';
    }
  }));

  getData();
};

export {clearForm};
