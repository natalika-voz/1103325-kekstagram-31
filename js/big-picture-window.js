import { isEscapeKey } from './utils';

const modalEl = document.querySelector('.big-picture');
const closeModalEl = modalEl.querySelector('.big-picture__cancel');

export function createBigPicture({ url, likes, comments, description }) {
  const imgEl = modalEl.querySelector('.big-picture__img').querySelector('img');
  const likesCount = modalEl.querySelector('.likes-count');
  const socialComments = modalEl.querySelector('.social__comments');
  const socialCommentTemplate = socialComments.querySelector('.social__comment');
  const commentsCaption = modalEl.querySelector('.social__caption');
  const commentsCount = modalEl.querySelector('.social__comment-count');
  const commentsLoader = modalEl.querySelector('.social__comments-loader');

  const socialCommentsFragment = document.createDocumentFragment();

  imgEl.src = url;
  likesCount.textContent = likes;
  socialComments.innerHTML = '';

  comments.forEach((comment) => {
    const socialComment = socialCommentTemplate.cloneNode(true);

    socialComment.querySelector('.social__picture').src = comment.avatar;
    socialComment.querySelector('.social__picture').alt = comment.name;
    socialComment.querySelector('.social__text').textContent = comment.message;

    socialCommentsFragment.appendChild(socialComment);
  });

  socialComments.appendChild(socialCommentsFragment);
  commentsCaption.textContent = description;
  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
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
}
