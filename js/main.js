import './validator-form.js';
import './map.js';
import './get-slider-element.js';
import {renderSimilarPopap, setTypeClick, setRoomsClick, setGuestsClick, setFeaturesClick, setPriceClick} from './map.js';
import { setUserFormSubmit } from './submiting-form.js';
import './reset-form.js';
import {getErrorMessage} from './get-message.js';
import './avatar.js';
import './photos-of-housing.js';


fetch('https://25.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((offerElements) => {
    renderSimilarPopap(offerElements);
    setTypeClick(() => {
      renderSimilarPopap(offerElements);
    });
    setRoomsClick(() => {
      renderSimilarPopap(offerElements);
    });
    setGuestsClick(() => {
      renderSimilarPopap(offerElements);
    });
    setFeaturesClick(() => {
      renderSimilarPopap(offerElements);
    });
    setPriceClick(() => {
      renderSimilarPopap(offerElements);
    });
  })
  .catch(() => getErrorMessage()
  );


setUserFormSubmit();

