import './forms.js';
import { generateMockPosts } from './data.js';
import { buildThumbnails } from './thumbnails.js';
import { createBigPicture, openModal } from './big-picture-window.js';

const thumbnails = generateMockPosts();
const picturesContainerEl = document.querySelector('.pictures');
// Добавляем миниатюры в DOM
buildThumbnails(thumbnails);

const openBigPicture = (evt) => {
  const currentThumbnailEl = evt.target.closest('.picture');
  const pictureId = currentThumbnailEl.dataset.pictureId;

  const currentThumbnailData = thumbnails.find((thumbnail) => thumbnail.id === Number(pictureId));

  if (currentThumbnailEl) {
    evt.preventDefault();
    createBigPicture(currentThumbnailData);
    openModal();
  }
};

picturesContainerEl.addEventListener('click', openBigPicture);
