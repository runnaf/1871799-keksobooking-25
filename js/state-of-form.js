import {removeClass, addClass} from './util.js';

const elementClassDisabled = [
  'ad-form',
  'map__filters',
];

function activateForm() {
  elementClassDisabled.forEach((className) => {
    const foundElement = document.querySelector(`.${className}`);

    removeClass(foundElement, `${className}--disabled`);
    foundElement.querySelectorAll('fieldset').forEach((Element) => {
      Element.removeAttribute('disabled');
    });
  });
}

function deactivateForm() {
  elementClassDisabled.forEach((className) => {
    const foundElement = document.querySelector(`.${className}`);

    addClass(foundElement, `${className}--disabled`);
    foundElement.querySelectorAll('fieldset').forEach((Element) => {
      Element.setAttribute('disabled', false);
    });
  });
}

export {activateForm, deactivateForm};
