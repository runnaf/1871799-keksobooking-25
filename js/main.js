import './validator-form.js';
import './map.js';
import './get-slider-element.js';
import {renderSimilarPopap, setTypeClick, setRoomsClick, setGuestsClick, setFeaturesClick, setPriceClick} from './map.js';
import { setUserFormSubmit } from './submiting-form.js';
import './reset-form.js';
import {getErrorMessage} from './get-message.js';
import {debounce} from './util.js';


fetch('https://25.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((offerElements) => {
    renderSimilarPopap(offerElements);
    setTypeClick(debounce(
      () => renderSimilarPopap(offerElements)
    ));
    setRoomsClick(debounce(
      () => renderSimilarPopap(offerElements)
    ));
    setGuestsClick(debounce(
      () => renderSimilarPopap(offerElements)
    ));
    setFeaturesClick(debounce(
      () => renderSimilarPopap(offerElements)
    ));
    setPriceClick(debounce(
      () => renderSimilarPopap(offerElements)
    ));
  })
  .catch(() => getErrorMessage()
  );


setUserFormSubmit();

