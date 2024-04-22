import { isEscapeKey } from './utils';
import { addComments } from './comments';

const modalEl = document.querySelector('.big-picture');
const closeModalEl = modalEl.querySelector('.big-picture__cancel');

export function createBigPicture({ url, likes, comments, description }) {
  const imgEl = modalEl.querySelector('.big-picture__img').querySelector('img');
  const likesCountEl = modalEl.querySelector('.likes-count');
  const commentsListEl = modalEl.querySelector('.social__comments');
  const socialCaptionEl = modalEl.querySelector('.social__caption');
  const commentsCountEl = modalEl.querySelector('.social__comment-count');
  const commentsLoaderEl = modalEl.querySelector('.social__comments-loader');

  imgEl.src = url;
  likesCountEl.textContent = likes;
  socialCaptionEl.textContent = description;

  addComments(commentsListEl, comments);

  commentsCountEl.classList.add('hidden');
  commentsLoaderEl.classList.add('hidden');
}

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeModal();
  }
};

export function openModal() {
  modalEl.classList.remove('hidden');
  document.body.classList.add('modal-open');

  closeModalEl.addEventListener('click', () => {
    closeModal();
  });

  document.addEventListener('keydown', onModalEscKeydown);
}

function closeModal() {
  modalEl.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onModalEscKeydown);
  document.removeEventListener('keydown', onModalEscKeydown);
}
