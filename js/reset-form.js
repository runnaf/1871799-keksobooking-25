import { clearForm } from './clear-form.js';

const form = document.querySelector('.ad-form');
const resetButton = form.querySelector('.ad-form__reset');

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  clearForm();
});
