function createThumbnail({ url, description, likes, comments, id }, picture) {
  const pictureElement = picture.cloneNode(true);
  const img = pictureElement.querySelector('.picture__img');

  img.src = url;
  img.alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.dataset.pictureId = id;

  return pictureElement;
}

function buildThumbnails(thumbnails) {
  const pictures = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const fragment = document.createDocumentFragment();

  thumbnails.forEach((data) => {
    const pictureElement = createThumbnail(data, pictureTemplate);
    fragment.appendChild(pictureElement);
  });

  pictures.appendChild(fragment);
}

export { buildThumbnails };
