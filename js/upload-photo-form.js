import { openModal } from './modal';

const form = document.querySelector('.img-upload__form');
const uploadFileControl = form.querySelector('#upload-file');
const overlayForm = form.querySelector('.img-upload__overlay');

export function initUploadForm() {
  uploadFileControl.addEventListener('change', () => {
    openModal(overlayForm);
  });
}
