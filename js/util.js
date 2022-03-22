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

export {getRandomInteger, getRandomFloat, getRandomArrayElement, getRandomArray, addClass, removeClass};
