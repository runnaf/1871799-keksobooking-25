import {TYPES} from './data.js';
import {addClass} from './util.js';

const similarOfferTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');
const photosTemplate = similarOfferTemplate.querySelector('.popup__photos');
const photoTemplate = photosTemplate.querySelector('.popup__photo');

const getSimilarElements = ({author, offer}) => {
  const offerElement = similarOfferTemplate.cloneNode(true);
  const offerElementTitle = offerElement.querySelector('.popup__title');
  const offerElementAdress = offerElement.querySelector('.popup__text--address');
  const offerElementPrice = offerElement.querySelector('.popup__text--price');
  const offerElementType= offerElement.querySelector('.popup__type');
  const offerElementCapacity = offerElement.querySelector('.popup__text--capacity');
  const offerElementTime = offerElement.querySelector('.popup__text--time');
  const offerElementDescription = offerElement.querySelector('.popup__description');
  const offerElementPhoto = offerElement.querySelector('.popup__photos');
  const offerElementAvatar = offerElement.querySelector('.popup__avatar');
  const hideElement = (element) => {addClass(element, 'hidden');};
  const addValue = (element, value) => {element.innerHTML = value;};

  if (offer.title) {
    addValue(offerElementTitle, offer.title);
  } else {
    hideElement(offerElementTitle);
  }

  if (offer.address) {
    addValue(offerElementAdress, offer.address);
  } else {
    hideElement(offerElementAdress);
  }

  if (offer.price) {
    addValue(offerElementPrice, `${offer.price }₽/ночь`);
  } else {
    hideElement(offerElementPrice);
  }

  if (offer.type) {
    addValue(offerElementType, TYPES[offer.type]);
  } else {
    hideElement(offerElementType);
  }

  if (offer.rooms && offer.guests) {
    addValue(offerElementCapacity, `${offer.rooms} комнаты для ${offer.guests} гостей`);
  } else {
    hideElement(offerElementCapacity);
  }

  if (offer.checkin && offer.checkout) {
    addValue(offerElementTime, `Заезд после${ offer.checkin }, выезд до ${ offer.checkout}`);
  } else {
    hideElement(offerElementTime);
  }

  if (offer.description) {
    addValue(offerElementDescription, offer.description);
  } else {
    hideElement(offerElementDescription);
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
    offerElementPhoto.innerHTML = '';
    offer.photos.forEach( (photo) => {
      const item = photoTemplate.cloneNode(true);
      item.src = photo;
      offerElementPhoto.append(item);
    });
  } else {
    hideElement(offerElementPhoto);
  }

  if (author.avatar) {
    offerElementAvatar.src = author.avatar;
  } else {
    hideElement(offerElementAvatar);
  }

  return offerElement;
};

export {getSimilarElements};

