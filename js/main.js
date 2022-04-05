import './validator-form.js';
import './map.js';
import './get-slider-element.js';
import {renderSimilarPopap, setTypeClick, setRoomsClick, setGuestsClick, setFeaturesClick, setPriceClick} from './map.js';
import { setUserFormSubmit } from './submiting-form.js';
import './reset-form.js';
import {getErrorMessage} from './get-message.js';
import {debounce} from './util.js';
const RERENDER_DELAY = 500;

fetch('https://25.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((offerElements) => {
    renderSimilarPopap(offerElements);
    setTypeClick(debounce(
      () => renderSimilarPopap(offerElements),
      RERENDER_DELAY,
    ));
    setRoomsClick(debounce(
      () => renderSimilarPopap(offerElements),
      RERENDER_DELAY,
    ));
    setGuestsClick(debounce(
      () => renderSimilarPopap(offerElements),
      RERENDER_DELAY,
    ));
    setFeaturesClick(debounce(
      () => renderSimilarPopap(offerElements),
      RERENDER_DELAY,
    ));
    setPriceClick(debounce(
      () => renderSimilarPopap(offerElements),
      RERENDER_DELAY,
    ));
  })
  .catch(() => getErrorMessage()
  );


setUserFormSubmit();

