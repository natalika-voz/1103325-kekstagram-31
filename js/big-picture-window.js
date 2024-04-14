
const modalEl = document.querySelector('.big-picture');
const picturesContainerEl = document.querySelector('.pictures');
const closeModalEl = modalEl.querySelector('.big-picture__cancel');

function closeModal() {
  modalEl.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

function openModal() {
  modalEl.classList.remove('hidden');
  document.body.classList.add('modal-open');

  closeModalEl.addEventListener('click', () => {
    closeModal();
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closeModal();
    }
  });
}

picturesContainerEl.addEventListener('click', (evt) => {
  evt.preventDefault();
  console.log(evt.target);
  openModal();
});
// Окно должно открываться при клике на миниатюру. Данные для окна (изображение, комментарии, лайки и так далее) берите из того же объекта, который использовался для отрисовки соответствующей миниатюры.
