import {getRemoveClass, getAdClass} from './util.js';

const elementClassDisabled = [
  'ad-form',
  'map__filters',
];

function activateForms() {
  elementClassDisabled.forEach((className) => {
    const block = document.querySelector(`.${className}`);

    getRemoveClass(block, `${className}--disabled`);
    block.querySelectorAll('fieldset').forEach((element) => {
      element.disabled = true;
    });
  });
}

function deactivateForms() {
  elementClassDisabled.forEach((className) => {
    const block = document.querySelector(`.${className}`);

    getAdClass(block, `${className}--disabled`);
    block.querySelectorAll('fieldset').forEach((element) => {
      element.disabled = false;
    });
  });
}

const getActivateForms = () => {
  activateForms(true);
  deactivateForms(false);
};

const getDeactivateForms = () => {
  activateForms(false);
  deactivateForms(true);
};

export {getActivateForms, getDeactivateForms};
