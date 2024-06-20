// import './forms.js';
import { initUploadForm } from './upload-photo-form.js';
import { generateMockPosts } from './data.js';
import { buildThumbnails } from './thumbnails.js';
import { buildBigPicture } from './big-picture.js';

function createApp() {
  // Добавляем миниатюры в DOM
  const thumbnails = generateMockPosts();
  buildThumbnails(thumbnails);

  const picturesContainerEl = document.querySelector('.pictures');
  const bigPictureEl = document.querySelector('.big-picture');

  const openBigPicture = (evt) => {
    const currentThumbnailEl = evt.target.closest('.picture');

    if (!currentThumbnailEl) {
      return;
    }

    const pictureId = currentThumbnailEl.dataset.pictureId;

    const currentThumbnailData = thumbnails.find((thumbnail) => thumbnail.id === Number(pictureId));

    if (currentThumbnailEl) {
      evt.preventDefault();
      buildBigPicture(bigPictureEl, currentThumbnailData);

      const closeEl = bigPictureEl.querySelector('.cancel');

      bigPictureEl.classList.remove('hidden');
      document.body.classList.add('modal-open');

      closeEl.addEventListener('click', () => {
        bigPictureEl.classList.add('hidden');
        document.body.classList.remove('modal-open');
      }, { once: true });
    }
  };

  picturesContainerEl.addEventListener('click', openBigPicture);

  initUploadForm();
}

createApp();
