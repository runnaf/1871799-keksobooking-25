import {getSimilarElements} from './generating-similar-elements.js';
import {activateForm} from './state-of-form.js';

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
  .on('load', () => {
    activateForm();
  })
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
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const filterArray = ({offer}) => {

  const housingFeature = () => {
    const filtersFeatures = [];
    const checkedFilters = document.querySelector('.map__features').querySelectorAll('input:checked');
    checkedFilters.forEach((el) => filtersFeatures.push(el.value));
    if (offer.features) {
      return filtersFeatures.every((feature) => offer.features.includes(feature));
    }
    return false;
  };

  const housingPriceCont = (housingPrice.value === 'any') ? true : (offer.price >= pricesByValues[housingPrice.value].min && offer.price <= pricesByValues[housingPrice.value].max);
  const housingTypeCond = (housingType.value === 'any') ? true : (offer.type === (housingType.value));
  const housingGuestsCond = (housingGuests.value === 'any') ? true : (offer.guests === Number(housingGuests.value));
  const housingRoomsCond = (housingRooms.value === 'any') ? true : (offer.rooms === Number(housingRooms.value));

  return (housingTypeCond && housingGuestsCond && housingRoomsCond && housingPriceCont && housingFeature());
};

const renderSimilarPopap = (offerElements) => {
  offerElements
    .filter(filterArray)
    .slice(0, SIMILAR_ADS)
    .forEach((element) => {
      const marker = L.marker(
        element.location,
        {
          icon,
        },
      );

      marker
        .addTo(map)
        .bindPopup(getSimilarElements(element));
    });
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

const setTypeClick = (cd) => {
  housingType.addEventListener('change', () => {
    removePopup();
    removeMarkers();
    cd();
  });
};

const setRoomsClick = (cd) => {
  housingRooms.addEventListener('change', () => {
    removePopup();
    removeMarkers();
    cd();
  });
};

const setGuestsClick = (cd) => {
  housingGuests.addEventListener('change', () => {
    removePopup();
    removeMarkers();
    cd();
  });
};

const setFeaturesClick = (cd) => {
  housingFeaturesArray.forEach((featureElement) => {
    featureElement.addEventListener('change', () => {
      removePopup();
      removeMarkers();
      cd();
    });
  });
};

const setPriceClick = (cd) => {
  housingPrice.addEventListener('change', () => {
    removePopup();
    removeMarkers();
    cd();
  });
};

const markerGroup = L.layerGroup().addTo(map);

markerGroup.clearLayers();

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
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

export {renderSimilarPopap, removeMarkers, mainPinMarker, LAT_TOKIO, LNG_TOKIO, map, setTypeClick, setPriceClick, removePopup, setRoomsClick, setGuestsClick, setFeaturesClick};
