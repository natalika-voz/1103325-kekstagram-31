import { initPhotoFilter } from './photo-filter.js';
import { initScalingPhoto } from './scaling-photo.js';
import { initFormValidation } from './form-validation.js';
import { createPost } from '../api.js';
import { showSubmitPostError, showSubmitPostSuccess } from '../alert.js';

const formEl = document.querySelector('.img-upload__form');
const uploadFileControlEl = formEl.querySelector('#upload-file');
const overlayFormEl = formEl.querySelector('.img-upload__overlay');
const hashtagInputEl = formEl.querySelector('.text__hashtags');
const descriptionInputEl = formEl.querySelector('.text__description');
const imagePreview = formEl.querySelector('.img-upload__preview');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const imageDefault = document.querySelector('.img-upload__preview img');

function initSubmitForm() {
  formEl.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(formEl);

    createPost(formData)
      .then(() => {
        showSubmitPostSuccess();

        formEl.reset();
        imagePreview.removeAttribute('style');
        sliderContainer.classList.add('hidden');
        imageDefault.removeAttribute('style');
      })
      .catch(() => {
        showSubmitPostError();
      });
  });
}

export function resetForm() {
  uploadFileControlEl.value = '';
}

export function initUploadForm() {
  initFormValidation(formEl, hashtagInputEl);
  initScalingPhoto(formEl);
  initPhotoFilter();
  initSubmitForm();

  uploadFileControlEl.addEventListener('change', () => {
    const closeEl = overlayFormEl.querySelector('.cancel');

    overlayFormEl.classList.remove('hidden');
    document.body.classList.add('modal-open');

    // Закрытие формы при клике на кнопку "Закрыть"
    closeEl.addEventListener(
      'click',
      () => {
        overlayFormEl.classList.add('hidden');
        document.body.classList.remove('modal-open');
        resetForm();
      },
    );

    // Закрытие формы при нажатии на клавишу Escape
    document.addEventListener('keydown', (event) => {
      const isEscEvent = (evt) => evt.key === 'Escape';
      const isHashtagInputFocused = document.activeElement !== hashtagInputEl;
      const isDescriptionInputFocused = document.activeElement !== descriptionInputEl;

      if (isEscEvent(event) && isHashtagInputFocused && isDescriptionInputFocused) {
        overlayFormEl.classList.add('hidden');
        document.body.classList.remove('modal-open');
        resetForm();
      }
    });
  });
}
