const RERENDER_DELAY = 500;
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomFloat = (a, b,  digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));

  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getRandomArray = (sourceArray, numberOfArrayElements) => {
  const randomArray = [];
  for (let i=0; i<numberOfArrayElements; i++) {
    const elementRandomArray = getRandomArrayElement (sourceArray);
    if (randomArray.indexOf(elementRandomArray) === -1)
    {randomArray.push(elementRandomArray);}
  }
  return randomArray;
};

const addClass = (element, classToAdd) => {
  const className = element.classList.add(classToAdd);
  return className;
};

const removeClass = (element, classToRemove) => {
  const classRemove = element.classList.remove(classToRemove);
  return classRemove;
};

const debounce = (callback, timeoutDelay = RERENDER_DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const addPhoto = (Input, elementPhoto) => {
  const file = Input.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    elementPhoto.src = URL.createObjectURL(file);
  }
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomInteger, getRandomFloat, getRandomArrayElement, getRandomArray, addClass, removeClass, isEscapeKey, debounce, addPhoto};
