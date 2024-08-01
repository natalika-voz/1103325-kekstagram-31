export function fetchPosts() {
  return fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => response.json());
}
