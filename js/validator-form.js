const MIN_VALUE_TITLE = 30;
const MAX_VALUE_TITLE = 100;
const MAX_VALUE_PRICE = 100000;
const NUMBER_ROOMS_VALIDATE_VALUE = '100';
const NUMBER_CAPACITY_VALUE = '0';
const MIN_PRICE = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};
const ROOMS_OPTION = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0'],
};
const formElement = document.querySelector('.ad-form');
const timeInElement = formElement.querySelector('#timein');
const timeOutElement = formElement.querySelector('#timeout');
const titleFieldElement = formElement.querySelector('#title');
const priceFieldElement = formElement.querySelector('#price');
const typeFieldElement = formElement.querySelector('[name="type"]');
const typeFieldElements = formElement.querySelectorAll('[name="type"]');
const numberOfRoomsField = formElement.querySelector('[name="rooms"]');
const numberOfCapacityField = formElement.querySelector('[name="capacity"]');
let pristine;

const validateTitle = (value) => value.length >= MIN_VALUE_TITLE && value.length <= MAX_VALUE_TITLE;

const getTitleErrorMessage = () => 'от 30 до 100 символов';

const validationPrice = (price) => {
  const typeOfHouseField = typeFieldElement;
  return price <= MAX_VALUE_PRICE && price >= MIN_PRICE[typeOfHouseField.value];
};

const getPriceErrorMessage = (price) => {
  if (price < MAX_VALUE_PRICE) {
    const typeOfHouseField = typeFieldElement;

    return `Минимальная цена за ночь должна быть больше ${MIN_PRICE[typeOfHouseField.value]}`;
  } else {
    return `Минимальная цена за ночь должна быть меньше ${MAX_VALUE_PRICE}`;
  }
};

const validateRooms = () => ROOMS_OPTION[numberOfRoomsField.value].includes(numberOfCapacityField.value);

const getRoomsErrorMessage = () =>{
  if (numberOfRoomsField.value === NUMBER_ROOMS_VALIDATE_VALUE || numberOfCapacityField.value === NUMBER_CAPACITY_VALUE) {
    return '100 комнат не для гостей';
  } return 'количество комнат не должно превышать количество гостей';
};

const validationForm = () => {
  pristine = new Pristine(formElement, {
    classTo: 'ad-form__element',
    errorTextParent: 'ad-form__element',
    errorTextClass: 'ad-form__error-text',
    errorTextTag: 'div',
  });
  pristine.addValidator(titleFieldElement, validateTitle, getTitleErrorMessage);
  pristine.addValidator(priceFieldElement, validationPrice, getPriceErrorMessage);

  typeFieldElements.forEach((item) => item.addEventListener('change', onTypeOfHousChange));
  function onTypeOfHousChange () {
    priceFieldElement.placeholder = MIN_PRICE[this.value];
    pristine.validate(priceFieldElement);
  }
  pristine.addValidator(numberOfRoomsField, validateRooms, getRoomsErrorMessage);
  pristine.addValidator(numberOfCapacityField, validateRooms, getRoomsErrorMessage);
  const isValid = pristine.validate();
  return isValid;
};

timeInElement.addEventListener('change', () => {
  timeOutElement.value = timeInElement.value;
});

timeOutElement.addEventListener('change', () => {
  timeInElement.value = timeOutElement.value;
});

export {validationForm, pristine};
