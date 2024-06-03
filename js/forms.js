import Pristine from 'pristinejs';

const form = document.querySelector('.img-upload__form');
const overlayForm = document.querySelector('.img-upload__overlay');

const config = {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
};

const pristine = new Pristine(form, config);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();

  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});

overlayForm.classList.add('hidden');

// export function cancelForm() {
//   closeButton.classList.add('hidden');
//   document.body.classList.remove('modal-open');
// }

// export function openModal() {
//   modalEl.classList.remove('hidden');
//   document.body.classList.add('modal-open');

//   closeModalEl.addEventListener('click', () => {
//     closeModal();
//   });

//   document.addEventListener('keydown', onModalEscKeydown);
// }
