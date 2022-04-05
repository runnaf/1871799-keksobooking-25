import{debounce} from './util.js';
import {renderSimilarPopap, setTypeClick, setRoomsClick, setGuestsClick, setFeaturesClick, setPriceClick} from './map.js';
import {getErrorMessage} from './get-message.js';

const getData = () => {
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
};

export {getData};
