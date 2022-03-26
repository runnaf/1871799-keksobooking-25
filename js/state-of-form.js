import {removeClass, addClass} from './util.js';

const elementClassDisabled = [
  'ad-form',
  'map__filters',
];

function activateForms() {
  elementClassDisabled.forEach((className) => {
    const foundElement = document.querySelector(`.${className}`);

    removeClass(foundElement, `${className}--disabled`);
    foundElement.querySelectorAll('fieldset').forEach((Element) => {
      Element.removeAttribute('disabled');
    });
  });
}

function deactivateForms() {
  elementClassDisabled.forEach((className) => {
    const foundElement = document.querySelector(`.${className}`);

    addClass(foundElement, `${className}--disabled`);
    foundElement.querySelectorAll('fieldset').forEach((Element) => {
      Element.setAttribute('disabled', false);
    });
  });
}

// const activateForm = () => {
//   activateForms(true);
//   deactivateForms(false);
// };

// const deactivateForm = () => {
//   activateForms(false);
//   deactivateForms(true);
// };

export {activateForms, deactivateForms};
