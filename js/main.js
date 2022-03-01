function getRandomInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomFloat (a, b,  digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));

  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

function getRandomArrayElement(elements) {
  return elements[getRandomInteger(0, elements.length - 1)];
}

function getRandomArray (sourceArray, numberOfArrayElements) {
  const randomArray = [];
  for (let i=0; i<numberOfArrayElements; i++) {
    const elementRandomArray = getRandomArrayElement (sourceArray);
    if (randomArray.indexOf(elementRandomArray) === -1)
    {randomArray.push(elementRandomArray);}
  }
  return randomArray;
}

const SIMILAR_OBJECT_COUNT = 10;

function getAuthorsArray() {
  const authors = [];
  for (let i=0; i<= SIMILAR_OBJECT_COUNT - 1; i++) {
    let randomUserNumber = i + 1;

    if (i < 9) {
      randomUserNumber = '0'.concat(i + 1);
    }

    authors[i] = {
      avatar : `img/avatars/user${  randomUserNumber  }.png`,
    };
  }
  return authors;
}
getAuthorsArray();

const LAT_NUMBER_MIN = 35.65000;
const LAT_NUMBER_MAX = 35.70000;
const LNG_NUMBER_MIN = 139.70000;
const LNG_NUMBER_MAX = 139.80000;
const NUMBER_OF_DECIMALS = 5;

function getLocationArray() {
  const locations = [];
  for (let i=0; i<= SIMILAR_OBJECT_COUNT - 1; i++) {
    const location = {
      lat: getRandomFloat(LAT_NUMBER_MIN, LAT_NUMBER_MAX, NUMBER_OF_DECIMALS),
      lng: getRandomFloat(LNG_NUMBER_MIN, LNG_NUMBER_MAX, NUMBER_OF_DECIMALS),
    };
    locations.push(location);
  }
  return locations;
}

function getAddressElement() {
  const randomElement = getRandomArrayElement(getLocationArray());
  return ((randomElement.lat).toString()).concat(', ', ((randomElement.lng).toString()));
}

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

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

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

const offer = () => ({
  title: 'Наше предложение по аренде Вам понравится',
  address: getAddressElement(),
  price: getRandomInteger(0, MAX_PRICE),
  type: getRandomArrayElement(TYPES),
  rooms: getRandomInteger(1, MAX_ROOMS),
  guests: getRandomInteger(1, MAX_GUESTS),
  checkin: getRandomArrayElement(CHECKINS),
  checkout: getRandomArrayElement(CHECKOUTS),
  features: getRandomArray(FEATURES_ARRAY, getRandomInteger (1, FEATURES_ARRAY.length)),
  description: 'Просторное помещение с прекрасным видом',
  photos: getRandomArray(PHOTOS_ARRAY, getRandomInteger (1, PHOTOS_ARRAY.length)),
});

const getArrayOffers = () => Array.from({length: SIMILAR_OBJECT_COUNT}, offer);
getArrayOffers();
