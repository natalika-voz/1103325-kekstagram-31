// Этот код реализует модальное окно для просмотра большого изображения с детальной информацией

import { buildBigPicture } from './big-picture';
import { isEscapeKey } from '../utils';

const picturesContainerEl = document.querySelector('.pictures');
const bigPictureEl = document.querySelector('.big-picture');

function show(evt, data) {
  const currentThumbnailEl = evt.target.closest('.picture');

  if (!currentThumbnailEl) {
    return;
  }

  const pictureId = currentThumbnailEl.dataset.pictureId;
  const currentThumbnailData = data.find((thumbnail) => thumbnail.id === Number(pictureId));

  if (!currentThumbnailEl) {
    return;
  }

  evt.preventDefault();
  buildBigPicture(bigPictureEl, currentThumbnailData);
  bigPictureEl.classList.remove('hidden');
  document.body.classList.add('modal-open');

  addListeners();
}

function close() {
  bigPictureEl.classList.add('hidden');
  document.body.classList.remove('modal-open');
  removeListeners();
}

function addListeners() {
  const closeEl = bigPictureEl.querySelector('.cancel');
  document.addEventListener('keydown', onEscapeClose);
  closeEl.addEventListener('click', close);
}

function removeListeners() {
  const closeEl = bigPictureEl.querySelector('.cancel');
  document.removeEventListener('keydown', onEscapeClose);
  closeEl.removeEventListener('click', close);
}

function onEscapeClose(evt) {
  if (isEscapeKey(evt)) {
    close();
  }
}

export function initBigPictureModal(postData) {
  picturesContainerEl.addEventListener('click', (evt) => {
    show(evt, postData);
  });
}
