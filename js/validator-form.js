const form = document.querySelector('.ad-form');
const MIN_VALUE_TITLE = 30;
const MAX_VALUE_TITLE = 100;
const MAX_VALUE_PRICE = 100000;
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');
const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error-text',
  errorTextTag: 'div',
});

const titleField = form.querySelector('#title');

function validateTitle (value) {
  return value.length >= MIN_VALUE_TITLE && value.length <= MAX_VALUE_TITLE;
}

function getTitleErrorMessage () {
  return 'от 30 до 100 символов';
}

pristine.addValidator(titleField, validateTitle, getTitleErrorMessage);

const priceField = form.querySelector('#price');
const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

function validatePrice (price) {
  const typeOfHouseField = form.querySelector('[name="type"]');
  return price <= MAX_VALUE_PRICE && price >= minPrice[typeOfHouseField.value];
}

function getPriceErrorMessage (price) {
  if (price < MAX_VALUE_PRICE) {
    const typeOfHouseField = form.querySelector('[name="type"]');

    return `Минимальная цена за ночь должна быть больше ${minPrice[typeOfHouseField.value]}`;
  } else {
    return `Минимальная цена за ночь должна быть меньше ${MAX_VALUE_PRICE}`;
  }
}

pristine.addValidator(priceField, validatePrice, getPriceErrorMessage);

function onTypeOfHousChange () {
  priceField.placeholder = minPrice[this.value];
  pristine.validate(priceField);
}

form.querySelectorAll('[name="type"]').forEach((item) => item.addEventListener('change', onTypeOfHousChange));


const numberOfRoomsField = form.querySelector('[name="rooms"]');
const numberOfCapacityField = form.querySelector('[name="capacity"]');
const roomsOption = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0'],
};

function validateRooms () {
  return roomsOption[numberOfRoomsField.value].includes(numberOfCapacityField.value);
}

function getRoomsErrorMessage () {
  if (numberOfRoomsField.value === '100' || numberOfCapacityField.value === '0') {
    return '100 комнат не для гостей';
  } return 'количество комнат не должно превышать количество гостей';
}

pristine.addValidator(numberOfRoomsField, validateRooms, getRoomsErrorMessage);
pristine.addValidator(numberOfCapacityField, validateRooms, getRoomsErrorMessage);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});
