import { buildBigPicture } from './big-picture';

const picturesContainerEl = document.querySelector('.pictures');
const bigPictureEl = document.querySelector('.big-picture');

export function initBigPictureModal(postData) {
  const onPostClickOpenModal = (evt) => {
    const currentThumbnailEl = evt.target.closest('.picture');

    if (!currentThumbnailEl) {
      return;
    }

    const pictureId = currentThumbnailEl.dataset.pictureId;

    const currentThumbnailData = postData.find((thumbnail) => thumbnail.id === Number(pictureId));

    if (currentThumbnailEl) {
      evt.preventDefault();
      buildBigPicture(bigPictureEl, currentThumbnailData);

      const closeEl = bigPictureEl.querySelector('.cancel');

      bigPictureEl.classList.remove('hidden');
      document.body.classList.add('modal-open');

      closeEl.addEventListener('click', () => {
        bigPictureEl.classList.add('hidden');
        document.body.classList.remove('modal-open');
      }, { once: true });
    }
  };

  picturesContainerEl.addEventListener('click', onPostClickOpenModal);
}
