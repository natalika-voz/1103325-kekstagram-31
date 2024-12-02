function buildNotification(el) {
  document.body.appendChild(el);

  window.setTimeout(() => {
    el.remove();
  }, 5000);
}

function buildPostsLoadError() {
  const template = document.querySelector('#posts-load-error').content;
  const el = template.querySelector('.data-error');
  buildNotification(el);

  return el;
}

function buildSubmitPostError() {
  const template = document.querySelector('#image-load-error').content;
  const el = template.querySelector('.error');
  buildNotification(el);

  return el;
}

function buildSubmitPostSuccess() {
  const template = document.querySelector('#image-load-success').content;
  const el = template.querySelector('.success');
  buildNotification(el);

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
