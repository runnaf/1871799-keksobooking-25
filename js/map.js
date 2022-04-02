import {getSimilarElements} from './generating-similar-elements.js';
import {activateForm} from './state-of-form.js';

const FLOAT_ADDRESS = 5;
const LAT_TOKIO = 35.68173;
const LNG_TOKIO = 139.75393;
const map = L.map('map-canvas')
  .on('load', () => {
    activateForm();
  })
  .setView({
    lat: LAT_TOKIO,
    lng: LNG_TOKIO,
  }, 13);

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


const renderSimilarPopap = (offerElements) => {
  offerElements.forEach((element) => {
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

export {renderSimilarPopap, mainPinMarker, LAT_TOKIO, LNG_TOKIO};
