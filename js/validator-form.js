const form = document.querySelector('.ad-form');
const MIN_VALUE_TITLE = 30;
const MAX_VALUE_TITLE = 100;
const MAX_VALUE_PRICE = 100000;
const pristine = new Pristine(form, {
  classTo: 'ad-form__label',
  errorClass: 'ad-form__label--invalid',
  successClass: 'ad-form__label--valid',
  errorTextParent: 'ad-form__label',
  errorTextTag: 'p',
  errorTextClass: 'error',
});


function validateTitle (value) {
  return value.length >= MIN_VALUE_TITLE && value.length <= MAX_VALUE_TITLE;
}

pristine.addValidator(
  form.querySelector('#title'),
  validateTitle,
  'От 30 до 100 символов'
);

const priceField = form.querySelector('#price');
const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};
const typeContainer = form.querySelector('[name="type"]');

function validatePrice (price) {
  const typeOfHous = Array.from(typeContainer.children.selected);
  const minPriceOfArray = typeOfHous.sort().shift();
  return price <= MAX_VALUE_PRICE && price >= minPrice[minPriceOfArray.value];
}

function getPriceErrorMessage (price) {
  if (price < MAX_VALUE_PRICE) {
    const typeOfHous = Array.from(typeContainer.children.selected);
    const minPriceOfArray = typeOfHous.sort().shift();

    return `Минимальная цена за ночь должна быть больше ${minPrice[minPriceOfArray.value]}`;
  } else {
    return `Минимальная цена за ночь должна быть меньше ${MAX_VALUE_PRICE}`;
  }
}

pristine.addValidator(priceField, validatePrice, getPriceErrorMessage);

function ontypeOfHousChange () {
  priceField.placeholder = minPrice[this.value];
  pristine.validate(priceField);
}

typeContainer.children.foreach((item) => item.addEventListener('change', ontypeOfHousChange));


const numberOfRoomsField = form.querySelector('[name="rooms"]');
const numberOfCapacityField = form.querySelector('[capacity]');
const roomsOption = {
  '1 комната': ['для 1 гостя'],
  '2 комнаты': ['для 2 гостей', 'для 1 гостя'],
  '3 комнаты': ['для 3 гостей', 'для 2 гостей', 'для 1 гостя'],
  '100 комнат': ['не для гостей'],
};

function validateRooms () {
  return roomsOption[numberOfRoomsField.value].includes(numberOfCapacityField.value);
}

const getRoomsErrorMessage = () =>(numberOfRoomsField.value === '100' || numberOfCapacityField.value === '0')
  ? '100 комнат не для гостей'
  : 'количество комнат не должно превышать количество гостей';

pristine.addValidator(numberOfRoomsField, validateRooms, getRoomsErrorMessage);
pristine.addValidator(numberOfCapacityField, validateRooms, getRoomsErrorMessage);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
