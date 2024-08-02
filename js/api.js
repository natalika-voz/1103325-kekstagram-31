const url = 'https://31.javascript.htmlacademy.pro/kekstagram';

export function fetchPosts() {
  return fetch(`${url}/data`)
    .then((response) => response.json());
}

export function createPost(data) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}
