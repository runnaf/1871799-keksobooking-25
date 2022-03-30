import {mainPinMarker, LAT_TOKIO, LNG_TOKIO} from './map.js';
const inputsValue = {
  'title' : '',
  'address' : `${mainPinMarker.getLatLng().lat }, ${  mainPinMarker.getLatLng().lng}`,
  'type' : 'flat',
  'price' : '5000',
  'timein' : '12:00',
  'timeout' : '12:00',
  'room_number' : '1',
  'capacity' : '1'
};

const form = document.querySelector('.ad-form');
const inputs = form.querySelectorAll('input');
const selects = form.querySelectorAll('select');

const clearForm = () => {
  document.querySelectorAll('.leaflet-popup-pane').forEach((item) => {item.innerHTML = '';});
  mainPinMarker.setLatLng([LAT_TOKIO, LNG_TOKIO]);
  form.querySelector('textarea').value = '';
  inputs.forEach(((input) => {
    if (!input.matches('input[type="file"]')) {
      input.value = inputsValue[input.id];
      input.checked = false;
    }
    else {
      input.src = '';
    }
  }));

  selects.forEach((select) => {
    select.value = inputsValue[select.id];
  });
};
export {clearForm};
