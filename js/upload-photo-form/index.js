import { initPhotoFilter } from './photo-filter';
import { initScalingPhoto } from './scaling-photo';
import { initFormValidation } from './form-validation';

const formEl = document.querySelector('.img-upload__form');
const uploadFileControlEl = formEl.querySelector('#upload-file');
const overlayFormEl = formEl.querySelector('.img-upload__overlay');
const hashtagInputEl = formEl.querySelector('.text__hashtags');

export function resetForm() {
  uploadFileControlEl.value = '';
}

export function initUploadForm() {
  initFormValidation(formEl, hashtagInputEl);
  initScalingPhoto(formEl);
  initPhotoFilter();

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
