function buildPostsLoadError(container) {
  const template = document.querySelector('#posts-load-error').content;
  const error = template.querySelector('.data-error');
  container.appendChild(error);

  return error;
}

export function showError() {
  const error = buildPostsLoadError(document.body);

  window.setTimeout(() => {
    error.remove();
  }, 5000);
}
