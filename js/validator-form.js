const MIN_VALUE_TITLE = 30;
const MAX_VALUE_TITLE = 100;
const MAX_VALUE_PRICE = 100000;
const formElement = document.querySelector('.ad-form');
const timeInElement = formElement.querySelector('#timein');
const timeOutElement = formElement.querySelector('#timeout');
const titleFieldElement = formElement.querySelector('#title');
const priceFieldElement = formElement.querySelector('#price');
const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};
const numberOfRoomsField = formElement.querySelector('[name="rooms"]');
const numberOfCapacityField = formElement.querySelector('[name="capacity"]');
const roomsOption = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0'],
};

function validateTitle (value) {
  return value.length >= MIN_VALUE_TITLE && value.length <= MAX_VALUE_TITLE;
}

function getTitleErrorMessage () {
  return 'от 30 до 100 символов';
}

function validatePrice (price) {
  const typeOfHouseField = formElement.querySelector('[name="type"]');
  return price <= MAX_VALUE_PRICE && price >= minPrice[typeOfHouseField.value];
}

function getPriceErrorMessage (price) {
  if (price < MAX_VALUE_PRICE) {
    const typeOfHouseField = formElement.querySelector('[name="type"]');

    return `Минимальная цена за ночь должна быть больше ${minPrice[typeOfHouseField.value]}`;
  } else {
    return `Минимальная цена за ночь должна быть меньше ${MAX_VALUE_PRICE}`;
  }
}

function validateRooms () {
  return roomsOption[numberOfRoomsField.value].includes(numberOfCapacityField.value);
}

function getRoomsErrorMessage () {
  if (numberOfRoomsField.value === '100' || numberOfCapacityField.value === '0') {
    return '100 комнат не для гостей';
  } return 'количество комнат не должно превышать количество гостей';
}

function validatorForm () {
  const pristine = new Pristine(formElement, {
    classTo: 'ad-form__element',
    errorTextParent: 'ad-form__element',
    errorTextClass: 'ad-form__error-text',
    errorTextTag: 'div',
  });

  pristine.addValidator(titleFieldElement, validateTitle, getTitleErrorMessage);
  pristine.addValidator(priceFieldElement, validatePrice, getPriceErrorMessage);
  formElement.querySelectorAll('[name="type"]').forEach((item) => item.addEventListener('change', onTypeOfHousChange));
  function onTypeOfHousChange () {
    priceFieldElement.placeholder = minPrice[this.value];
    pristine.validate(priceFieldElement);
  }
  pristine.addValidator(numberOfRoomsField, validateRooms, getRoomsErrorMessage);
  pristine.addValidator(numberOfCapacityField, validateRooms, getRoomsErrorMessage);
  const isValid = pristine.validate();
  return isValid;
}

timeInElement.addEventListener('change', () => {
  timeOutElement.value = timeInElement.value;
});

timeOutElement.addEventListener('change', () => {
  timeInElement.value = timeOutElement.value;
});

export {validatorForm};
