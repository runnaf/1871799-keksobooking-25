const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('#price');
const MAX_VALUE_PRICE = 100000;
const initialValueSlider = 5000;
valueElement.value = 5000;
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: MAX_VALUE_PRICE,
  },
  start: initialValueSlider,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});

const getInitialValueSlider = () => {
  sliderElement.noUiSlider.set(initialValueSlider);
};

export {getInitialValueSlider};
