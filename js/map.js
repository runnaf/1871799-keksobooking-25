import {getSimilarElements} from './generating-similar-elements.js';
import {activateForm} from './state-of-form.js';

const ICON_SIZE_X = 40;
const ICON_SIZE_Y = 40;
const ICON_ANCHOR_X = 20;
const ICON_ANCHOR_Y = 40;
const MAIN_PIN_ICON_SIZE_X = 52;
const MAIN_PIN_ICON_SIZE_Y = 52;
const MAIN_PIN_ANCHOR_X = 26;
const MAIN_PIN_ANCHOR_Y = 52;
const DEFAULT_VALUE_FIELD = 'any';
const FLOAT_ADDRESS = 5;
const LAT_TOKIO = 35.68173;
const LNG_TOKIO = 139.75393;
const SIMILAR_ADS = 10;
const ZOOM = 13;
const housingType = document.querySelector('[name="housing-type"]');
const housingPrice = document.querySelector('[name="housing-price"]');
const housingRooms = document.querySelector('[name="housing-rooms"]');
const housingGuests = document.querySelector('[name="housing-guests"]');
const housingFeaturesArray = document.querySelectorAll('.map__checkbox');
const pricesByValues = {
  'low': {
    min: 0,
    max: 10000
  },
  'high': {
    min: 50000,
    max: 100000
  },
  'middle': {
    min: 10000,
    max: 50000
  },
};

const map = L.map('map-canvas')
  .setView({
    lat: LAT_TOKIO,
    lng: LNG_TOKIO,
  }, ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [ICON_SIZE_X, ICON_SIZE_Y],
  iconAnchor: [ICON_ANCHOR_X, ICON_ANCHOR_Y],
});

const filteringArray = ({offer}) => {

  const housingFeature = () => {
    const filtersFeatures = [];
    const checkedFilters = document.querySelector('.map__features').querySelectorAll('input:checked');
    checkedFilters.forEach((el) => filtersFeatures.push(el.value));
    if (offer.features) {
      return filtersFeatures.every((feature) => offer.features.includes(feature));
    }
    return false;
  };

  const housingPriceCont = (housingPrice.value ===  DEFAULT_VALUE_FIELD) ? true : (offer.price >= pricesByValues[housingPrice.value].min && offer.price <= pricesByValues[housingPrice.value].max);
  const housingTypeCond = (housingType.value ===  DEFAULT_VALUE_FIELD) ? true : (offer.type === (housingType.value));
  const housingGuestsCond = (housingGuests.value ===  DEFAULT_VALUE_FIELD) ? true : (offer.guests === Number(housingGuests.value));
  const housingRoomsCond = (housingRooms.value ===  DEFAULT_VALUE_FIELD) ? true : (offer.rooms === Number(housingRooms.value));

  return (housingTypeCond && housingGuestsCond && housingRoomsCond && housingPriceCont && housingFeature());
};

let markerGroup;

const renderSimilarPopap = (offerElements) => {
  markerGroup = L.layerGroup().addTo(map);

  offerElements
    .filter(filteringArray)
    .slice(0, SIMILAR_ADS)
    .forEach((element) => {
      const marker = L.marker(
        element.location,
        {
          icon,
        },
      );

      marker
        .addTo(markerGroup)
        .bindPopup(getSimilarElements(element));
    });
  activateForm();
};

const removePopup = () => {
  const popups = Array.from(document.querySelectorAll('.leaflet-popup-pane'));
  popups.forEach((popup) => {
    popup.innerHTML = '';
  });
};

const removeMarkers = () => {
  const points = document.querySelector('.leaflet-marker-pane');
  const markers = Array.from(points.querySelectorAll('img[src = "./img/pin.svg"]'));
  markers.forEach((marker) => {
    marker.remove();
  });
};

const searchResults = (fieldName, functionName) => {
  fieldName.addEventListener('change', () => {
    markerGroup.clearLayers();
    functionName();
  });
};

const setTypeClick = (cd) => {
  searchResults(housingType, cd);
};

const setRoomsClick = (cd) => {
  searchResults(housingRooms, cd);
};

const setGuestsClick = (cd) => {
  searchResults(housingGuests, cd);
};

const setFeaturesClick = (cd) => {
  housingFeaturesArray.forEach((featureElement) => {
    searchResults(featureElement, cd);
  });
};

const setPriceClick = (cd) => {
  searchResults(housingPrice, cd);
};

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [MAIN_PIN_ICON_SIZE_X, MAIN_PIN_ICON_SIZE_Y],
  iconAnchor: [MAIN_PIN_ANCHOR_X, MAIN_PIN_ANCHOR_Y],
});

const mainPinMarker = L.marker(
  {
    lat: LAT_TOKIO,
    lng: LNG_TOKIO,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

const addressOfMainPinMarker = document.querySelector('#address');
addressOfMainPinMarker.value = (`${mainPinMarker._latlng.lat  },${  mainPinMarker._latlng.lng}`);

mainPinMarker.on('moveend', (evt) => {
  addressOfMainPinMarker.value = (`${(evt.target.getLatLng().lat).toFixed(FLOAT_ADDRESS)}, ${(evt.target.getLatLng().lng).toFixed(FLOAT_ADDRESS)}`);
});


export {renderSimilarPopap, removeMarkers, mainPinMarker, LAT_TOKIO, LNG_TOKIO, map, ZOOM, setTypeClick, setPriceClick, removePopup, setRoomsClick, setGuestsClick, setFeaturesClick};
