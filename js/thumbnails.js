const buildThumbnails = (thumbnails) => {
  const pictures = document.querySelector('.pictures');
  const picture = document.querySelector('#picture').content.querySelector('.picture');
  const picturesFragment = document.createDocumentFragment();

  thumbnails.forEach(({ url, comments, description, likes }) => {
    const pictureElement = picture.cloneNode(true);
    const img = pictureElement.querySelector('.picture__img');

    img.src = url;
    img.alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    picturesFragment.appendChild(pictureElement);
  });

  pictures.appendChild(picturesFragment);
};

export { buildThumbnails };
