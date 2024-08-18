const url = 'https://31.javascript.htmlacademy.pro/kekstagram';

export function fetchPosts() {
  return fetch(`${url}/data`)
    .then((response) => response.json());
}

export function createPost(formData) {
  return fetch(url, {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json());
}
