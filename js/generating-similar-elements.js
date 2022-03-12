import {TYPES} from './data.js';
import {hideElement, addValue} from './util.js';


const similarOfferTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');
const photosTemplate = similarOfferTemplate.querySelector('.popup__photos');
const photoTemplate = photosTemplate.querySelector('.popup__photo');

const getSimilarElements = ({offer, author}) => {
  const offerElement = similarOfferTemplate.cloneNode(true);

  if (offer.title) {
    addValue(offerElement.querySelector('.popup__title'), offer.title);
  } else {
    hideElement(offerElement.querySelector('.popup__title'));
  }

  if (offer.address) {
    addValue(offerElement.querySelector('.popup__text--address'), offer.address);
  } else {
    hideElement(offerElement.querySelector('.popup__text--address'));
  }

  if (offer.price) {
    addValue(offerElement.querySelector('.popup__text--price'), `${offer.price }₽/ночь`);
  } else {
    hideElement(offerElement.querySelector('.popup__text--price'));
  }

  if (offer.type) {
    addValue(offerElement.querySelector('.popup__type'), TYPES[offer.type]);
  } else {
    hideElement(offerElement.querySelector('.popup__type'));
  }

  if (offer.rooms && offer.guests) {
    addValue(offerElement.querySelector('.popup__text--capacity'), `${offer.rooms} комнаты для ${offer.guests} гостей`);
  } else {
    hideElement(offerElement.querySelector('.popup__text--capacity'));
  }

  if (offer.checkin && offer.checkout) {
    addValue(offerElement.querySelector('.popup__text--time'), `Заезд после${ offer.checkin }, выезд до ${ offer.checkout}`);
  } else {
    hideElement(offerElement.querySelector('.popup__text--time'));
  }

  if (offer.description) {
    addValue(offerElement.querySelector('.popup__description'), offer.description);
  } else {
    hideElement(offerElement.querySelector('.popup__description'));
  }

  if (offer.features) {
    offerElement.querySelectorAll('.popup__feature').forEach((featureListItem) => {
      const isNecessary = offer.features.some(
        (feature) => featureListItem.classList.contains(`popup__feature--${feature}`)
      );
      if(!isNecessary){
        featureListItem.remove();
      }
    });
  } else {
    hideElement(offerElement.querySelector('.popup__features'));
  }

  if(offer.photos) {
    offerElement.querySelector('.popup__photos').innerHTML = '';
    offer.photos.forEach( (photo) => {
      const item = photoTemplate.cloneNode(true);
      item.src = photo;
      offerElement.querySelector('.popup__photos').append(item);
    });
  } else {
    hideElement(offerElement.querySelector('.popup__photos'));
  }

  if (author.avatar) {
    offerElement.querySelector('.popup__avatar').src = author.avatar;
  } else {
    hideElement(offerElement.querySelector('.popup__avatar'));
  }

  return document.querySelector('#map-canvas').appendChild(offerElement);
};

export {getSimilarElements};

