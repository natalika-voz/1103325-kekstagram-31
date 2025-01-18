import { isEscapeKey } from './utils';

function buildNotification(el, timer = 5000, closeButton) {
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      el.remove();
      removeListeners();
    });
  }

  const onEscapeClose = (evt) => {
    if (isEscapeKey(evt)) {
      el.remove();
      removeListeners();
    }
  };

  const onOutsideClick = (evt) => {
    if (evt.target.classList.contains('success')) {
      el.remove();
      removeListeners();
    }
  };

  function removeListeners() {
    document.removeEventListener('keydown', onEscapeClose);
    document.removeEventListener('click', onOutsideClick);
  }

  function addListeners() {
    document.addEventListener('keydown', onEscapeClose);
    document.addEventListener('click', onOutsideClick);
  }

  addListeners();

  document.body.appendChild(el);

  if (timer !== 0) {
    window.setTimeout(() => {
      el.remove();
    }, timer);
  }
}

function buildPostsLoadError() {
  const template = document.querySelector('#posts-load-error').content;
  const el = template.querySelector('.data-error').cloneNode(true);
  buildNotification(el);

  return el;
}

function buildSubmitPostError() {
  const template = document.querySelector('#image-load-error').content;
  const el = template.querySelector('.error').cloneNode(true);
  buildNotification(el);

  return el;
}

function buildSubmitPostSuccess() {
  const template = document.querySelector('#image-load-success').content;
  const el = template.querySelector('.success').cloneNode(true);
  const closeButton = el.querySelector('.success__button');

  buildNotification(el, 0, closeButton);

  return el;
}

export function showLoadPostsError() {
  buildPostsLoadError();
}

export function showSubmitPostError() {
  buildSubmitPostError();
}

export function showSubmitPostSuccess() {
  buildSubmitPostSuccess();
}

// Нужно сделать общую ошибку "Что-то пошло не так"
