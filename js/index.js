import { initUploadForm } from './upload-photo-form/index.js';
import { initBigPictureModal } from './big-picture-modal/index.js';
import { buildThumbnails } from './thumbnails.js';
import { fetchPosts } from './api.js';
import { showError } from './alert.js';

function createApp() {
  // получаем данные для постов
  fetchPosts()
    .then((posts) => {
      // Добавляем миниатюры в DOM
      buildThumbnails(posts);

      // инициализируем модалку загрузки фото
      initUploadForm();

      // инициализируем модалку показа полной информации поста
      initBigPictureModal(posts);
    })
    .catch((err) => {
      showError(err);
    });
}

createApp();
