import { generateMockPosts } from './data.js';
import { createThumbnails } from './thumbnails.js';
import { createBigPicture, openModal } from './big-picture-window.js';

const thumbnails = generateMockPosts();
const picturesContainerEl = document.querySelector('.pictures');
// вызов функции с аргументом
createThumbnails(thumbnails);

picturesContainerEl.addEventListener('click', (evt) => {
  const currentThumbnailEl = evt.target.closest('.picture');
  const pictureId = currentThumbnailEl.dataset.pictureId;

  const currentThumbnailData = thumbnails.find((thumbnail) => thumbnail.id === Number(pictureId));

  if (currentThumbnailEl) {
    evt.preventDefault();
    createBigPicture(currentThumbnailData);
    openModal();
  }
});
