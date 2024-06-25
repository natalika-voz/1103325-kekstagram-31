import { initUploadForm } from './upload-photo-form/index.js';
import { generateMockPosts } from './data.js';
import { buildThumbnails } from './thumbnails.js';
import { buildBigPicture } from './big-picture.js';

function createApp() {
  // получаем данные для постов
  const thumbnails = generateMockPosts();
  // Добавляем миниатюры в DOM
  buildThumbnails(thumbnails);

  // инициализируем модалку загрузки фото
  initUploadForm();

  // инициализируем модалку показа полной информации поста
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
}

createApp();
