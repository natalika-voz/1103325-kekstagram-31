import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const imagePreview = document.querySelector('.img-upload__preview');
const effectSlider = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const effectLevelValue = document.querySelector('.effect-level__value');
let currentEffect = 'none';

export function initPhotoFilter() {
  noUiSlider.create(effectSlider, {
    range: {
      'min': 0,
      'max': 100
    },
    start: 0,
    step: 1,
    connect: 'lower',
  });

  // Объект с функциями для каждого эффекта
  const effects = {
    'chrome': function(value) {
      return `grayscale(${value / 100})`;
    },
    'sepia': function(value) {
      return `sepia(${value / 100})`;
    },
    'marvin': function(value) {
      return `invert(${value}%)`;
    },
    'phobos': function(value) {
      return `blur(${value * 0.03}px)`;
    },
    'heat': function(value) {
      return `brightness(${1 + (value / 100) * 2})`;
    }
  };

  // Функция применения эффекта
  function applyEffect(effect, value) {
    if (effect === 'none') {
      imagePreview.style.filter = '';
      sliderContainer.classList.add('hidden');
    } else {
      imagePreview.style.filter = effects[effect](value);
      sliderContainer.classList.remove('hidden');
    }

    effectLevelValue.value = value;
  }

  effectSlider.noUiSlider.on('update', (values, handle) => {
    const value = values[handle];
    applyEffect(currentEffect, value);
  });

  document.querySelectorAll('.effects__radio').forEach((input) => {
    input.addEventListener('change', function() {
      currentEffect = this.getAttribute('value');

      applyEffect(currentEffect, 0);
      effectSlider.noUiSlider.set(0);
    });
  });

  // Set initial effect
  applyEffect('none', 0);
}

