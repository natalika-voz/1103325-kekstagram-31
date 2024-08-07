function buildPostsLoadError(container) {
  const template = document.querySelector('#posts-load-error').content;
  const el = template.querySelector('.data-error');
  container.appendChild(el);

  return el;
}

function buildSubmitPostError(container) {
  const template = document.querySelector('#image-load-error').content;
  const el = template.querySelector('.error');
  container.appendChild(el);

  return el;
}

function buildSubmitPostSuccess(container) {
  const template = document.querySelector('#image-load-success').content;
  const el = template.querySelector('.success');
  container.appendChild(el);

  return el;
}

export function showLoadPostsError() {
  const el = buildPostsLoadError(document.body);

  window.setTimeout(() => {
    el.remove();
  }, 5000);
}

export function showSubmitPostError() {
  const el = buildSubmitPostError(document.body);

  window.setTimeout(() => {
    el.remove();
  }, 5000);
}

export function showSubmitPostSuccess() {
  const el = buildSubmitPostSuccess(document.body);

  window.setTimeout(() => {
    el.remove();
  }, 5000);
}

// Нужно сделать общую ошибку "Что-то пошло не так"
