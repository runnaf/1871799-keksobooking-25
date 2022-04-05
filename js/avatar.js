import { addPhoto } from './util.js';

const fileChooser = document.querySelector('.ad-form__input-picture--avatar');
const preview = document.querySelector('.ad-form-header__img');

fileChooser.addEventListener('change', addPhoto(fileChooser, preview));
