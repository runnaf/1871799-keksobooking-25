const RERENDER_DELAY = 500;
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

export {addClass, removeClass, isEscapeKey, debounce, addPhoto};
