import { initPhotoFilter } from './photo-filter.js';
import { initScalingPhoto } from './scaling-photo.js';
import { initFormValidation } from './form-validation.js';
import { createPost } from '../api.js';
import { showSubmitPostError, showSubmitPostSuccess } from '../alert.js';

const formEl = document.querySelector('.img-upload__form');
const uploadFileControlEl = formEl.querySelector('#upload-file');
const overlayFormEl = formEl.querySelector('.img-upload__overlay');
const hashtagInputEl = formEl.querySelector('.text__hashtags');

function initSubmitForm() {
  formEl.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(formEl);

    createPost(formData)
      .then(() => {
        showSubmitPostSuccess();

        // start reset form
        formEl.reset();
        // end reset form
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

    closeEl.addEventListener(
      'click',
      () => {
        overlayFormEl.classList.add('hidden');
        document.body.classList.remove('modal-open');
        resetForm();
      },
      { once: true }
    );
  });
}
