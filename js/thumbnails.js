const createThumbnails = (thumbnails) => {
  const pictures = document.querySelector('.pictures');
  const picture = document.querySelector('#picture').content.querySelector('.picture');


  const picturesFragment = document.createDocumentFragment();

  thumbnails.forEach(({ url, comments, description, likes, id }) => {
    const pictureElement = picture.cloneNode(true);
    const img = pictureElement.querySelector('.picture__img');

    img.src = url;
    img.alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.dataset.pictureId = id;

    picturesFragment.appendChild(pictureElement);
  });

  pictures.appendChild(picturesFragment);
};

export { createThumbnails };
