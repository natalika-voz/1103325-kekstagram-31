import { initUploadForm } from './upload-photo-form/index.js';
import { initBigPictureModal } from './big-picture-modal/index.js';
import { buildThumbnails } from './thumbnails.js';
import { fetchPosts } from './api.js';
import { showLoadPostsError } from './alert.js';

function initFilters(postsLength) {
  const imgFilters = document.querySelector('.img-filters');

  if (postsLength > 1) {
    imgFilters.classList.remove('img-filters--inactive');
  }
}


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

      // инициализируем фильтры
      initFilters(posts.length);
    })
    .catch((err) => {
      showLoadPostsError(err);
    });
}

createApp();
