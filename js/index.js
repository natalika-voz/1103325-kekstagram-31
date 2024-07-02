import { initUploadForm } from './upload-photo-form/index.js';
import { initBigPictureModal } from './big-picture-modal/index.js';
import { generateMockPosts } from './data.js';
import { buildThumbnails } from './thumbnails.js';

function createApp() {
  // получаем данные для постов
  const postData = generateMockPosts();
  // Добавляем миниатюры в DOM
  buildThumbnails(postData);

  // инициализируем модалку загрузки фото
  initUploadForm();

  // инициализируем модалку показа полной информации поста
  initBigPictureModal(postData);
}

createApp();
