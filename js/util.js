const addClass = (element, classToAdd) => {
  const className = element.classList.add(classToAdd);
  return className;
};

const removeClass = (element, classToRemove) => {
  const classRemove = element.classList.remove(classToRemove);
  return classRemove;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export {addClass, removeClass, isEscapeKey};
