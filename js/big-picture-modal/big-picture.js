import { addComments } from '../comments';

export function buildBigPicture(el, data) {
  const imgEl = el.querySelector('.big-picture__img').querySelector('img');
  const likesCountEl = el.querySelector('.likes-count');
  const commentsListEl = el.querySelector('.social__comments');
  const socialCaptionEl = el.querySelector('.social__caption');
  const commentsCountEl = el.querySelector('.social__comment-count');
  const commentsLoaderEl = el.querySelector('.social__comments-loader');

  imgEl.src = data.url;
  likesCountEl.textContent = data.likes;
  socialCaptionEl.textContent = data.description;

  addComments(commentsListEl, data.comments);

  commentsCountEl.classList.add('hidden');
  commentsLoaderEl.classList.add('hidden');
}

