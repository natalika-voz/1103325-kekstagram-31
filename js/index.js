import { initUploadForm } from './upload-photo-form/index.js';
import { initBigPictureModal } from './big-picture-modal/index.js';
import { buildThumbnails } from './thumbnails.js';
import { fetchPosts } from './api.js';
import { showLoadPostsError } from './alert.js';


function initFilters(postsLength) {
  const imgFilters = document.querySelector('.img-filters');
  const defaultButton = imgFilters.querySelector('#filter-default');
  const randomButton = imgFilters.querySelector('#filter-random');
  const discussedButton = imgFilters.querySelector('#filter-discussed');

  if (postsLength > 1) {
    imgFilters.classList.remove('img-filters--inactive');
  }

  const setActiveFilter = (clickedButton) => {
    imgFilters.querySelector('.img-filters__button--active')
      .classList.remove('img-filters__button--active');
    clickedButton.classList.add('img-filters__button--active');
  };

  const debounce = (callback, timeoutDelay = 500) => {
    let timeoutId;
    return (...rest) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
    };
  };

  const updatePosts = debounce((posts) => {
    const pictures = document.querySelectorAll('.picture');
    pictures.forEach((picture) => picture.remove());
    buildThumbnails(posts);
  });

  defaultButton.addEventListener('click', () => {
    setActiveFilter(defaultButton);
    fetchPosts().then((posts) => {
      updatePosts(posts);
    });
  });

  randomButton.addEventListener('click', () => {
    setActiveFilter(randomButton);
    fetchPosts().then((posts) => {
      const randomPosts = [...posts]
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);
      updatePosts(randomPosts);
    });
  });

  discussedButton.addEventListener('click', () => {
    setActiveFilter(discussedButton);
    fetchPosts().then((posts) => {
      const sortedPosts = [...posts].sort((a, b) => b.comments.length - a.comments.length);
      updatePosts(sortedPosts);
    });
  });
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
