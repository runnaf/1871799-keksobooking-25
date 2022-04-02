import './validator-form.js';
import './map.js';
import './get-slider-element.js';
import {renderSimilarPopap} from './map.js';
import { setUserFormSubmit } from './submiting-form.js';
import './reset-form.js';
import {getErrorMessage} from './get-message.js';

const SIMILAR_ADS = 10;


fetch('https://25.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((offerElements) => {
    renderSimilarPopap(offerElements.slice(0, SIMILAR_ADS));
  })
  .catch(() => getErrorMessage()
  );


setUserFormSubmit();

