import{getRandomInteger, getRandomFloat, getRandomArrayElement, getRandomArray} from './util.js';

const LAT_NUMBER_MIN = 35.65000;
const LAT_NUMBER_MAX = 35.70000;
const LNG_NUMBER_MIN = 139.70000;
const LNG_NUMBER_MAX = 139.80000;
const NUMBER_OF_DECIMALS = 5;

const CHECKINS = [
  '12:00',
  '13:00',
  '14:00'
];

const CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00'
];

const TYPES = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
  'hotel': 'Отель',
};

const FEATURES_ARRAY = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS_ARRAY = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const MAX_PRICE = 100000;
const MAX_ROOMS = 5;
const MAX_GUESTS = 10;
const MIN_PRICE = 0;
const MIN_ROOMS = 1;
const MIN_GUESTS = 1;

const offerElement = (_elem, id) => {
  const lat = getRandomFloat(LAT_NUMBER_MIN, LAT_NUMBER_MAX, NUMBER_OF_DECIMALS);
  const lng = getRandomFloat(LNG_NUMBER_MIN, LNG_NUMBER_MAX, NUMBER_OF_DECIMALS);

  return {
    author: {
      avatar: `img/avatars/user${String(++id).padStart(2, '0')}.png`,
    },

    offer: {
      title: 'Обьявление о сдаче жилья',
      address: `${lat },${  lng}`,
      price: getRandomInteger(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayElement(Object.keys(TYPES)),
      rooms: getRandomInteger(MIN_ROOMS, MAX_ROOMS),
      guests: getRandomInteger(MIN_GUESTS, MAX_GUESTS),
      checkin: getRandomArrayElement(CHECKINS),
      checkout: getRandomArrayElement(CHECKOUTS),
      features: getRandomArray(FEATURES_ARRAY, getRandomInteger (1, FEATURES_ARRAY.length)),
      description: 'Просторное помещение с прекрасным видом',
      photos: getRandomArray(PHOTOS_ARRAY, getRandomInteger (1, PHOTOS_ARRAY.length)),
    },

    location: {
      lat: lat,
      lng: lng,
    }
  };
};

const getArrayElement = Array.from(offerElement);

export {getArrayElement, TYPES};
