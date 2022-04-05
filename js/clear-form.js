import {mainPinMarker, LAT_TOKIO, LNG_TOKIO, map, removePopup} from './map.js';
import {getInitialValueSlider} from './get-slider-element.js';

const TITLE_VALUE_DEFAULT = '';
const ADDRESS_VALUE_DEFAUL = `${mainPinMarker.getLatLng().lat }, ${  mainPinMarker.getLatLng().lng}`;
const TYPE_VALUE_DEFAULT = 'flat';
const PRICE_VALUE_DEFAULT = '5000';
const TIMEIN_VALUE_DEFAULT = '12:00';
const TIMEOUT_VALUE_DEFAULT = '12:00';
const ROOM_NUMBER_VALUE_DEFAULT = '1';
const CAPACITY_VALUE_DEFAULT = '1';


const inputsValue = {
  'title' : TITLE_VALUE_DEFAULT,
  'address' : ADDRESS_VALUE_DEFAUL,
  'type' : TYPE_VALUE_DEFAULT,
  'price' : PRICE_VALUE_DEFAULT,
  'timein' : TIMEIN_VALUE_DEFAULT,
  'timeout' : TIMEOUT_VALUE_DEFAULT,
  'room_number' : ROOM_NUMBER_VALUE_DEFAULT,
  'capacity' : CAPACITY_VALUE_DEFAULT,
};

const formElement = document.querySelector('.ad-form');
const inputElements = formElement.querySelectorAll('input');
const selectElements = formElement.querySelectorAll('select');


const clearForm = () => {
  removePopup();
  map.setView({
    lat: LAT_TOKIO,
    lng: LNG_TOKIO,
  }, 13);
  mainPinMarker.setLatLng([LAT_TOKIO, LNG_TOKIO]);
  formElement.querySelector('textarea').value = '';
  getInitialValueSlider();
  inputElements.forEach(((input) => {
    if (!input.matches('.ad-form__input-picture')) {
      input.value = inputsValue[input.id];
      input.checked = false;
    }
    else {
      input.src = '';
    }
  }));

  selectElements.forEach((select) => {
    select.value = inputsValue[select.id];
  });
};
export {clearForm};
