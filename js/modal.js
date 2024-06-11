import { isEscapeKey } from './utils';

const onModalEscKeydown = (evt, modalEl) => {
  if (isEscapeKey(evt)) {
    closeModal(modalEl);
  }
};

export function openModal(el) {
  const close = el.querySelector('.cancel');

  el.classList.remove('hidden');
  document.body.classList.add('modal-open');

  close.addEventListener('click', () => {
    closeModal(el);
  });

  document.addEventListener('keydown', (evt) => {
    onModalEscKeydown(evt, el);
  }, { once: true });
}

function closeModal(el) {
  el.classList.add('hidden');
  document.body.classList.remove('modal-open');
}
