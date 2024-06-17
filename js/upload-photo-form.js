import Pristine from 'pristinejs';
import { openModal } from './modal';

const form = document.querySelector('.img-upload__form');
const uploadFileControl = form.querySelector('#upload-file');
const overlayForm = form.querySelector('.img-upload__overlay');
const hashtagInput = form.querySelector('.text__hashtags');
const commentInput = form.querySelector('.text__description');

const config = {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
};

// Проверка количества хэштегов
const validateHashtagCount = (value) => {
  const hashtags = value.split(' ').filter(Boolean);
  return hashtags.length <= 5;
};

// Проверка формата хэштегов
const validateHashtagFormat = (value) => {
  const hashtags = value.split(' ').filter(Boolean);
  const regex = /^#[A-Za-z0-9]{1,19}$/;

  return hashtags.every((hashtag) => regex.test(hashtag));
};

// Проверка уникальности хэштегов
const validateHashtagUniqueness = (value) => {
  const hashtags = value.split(' ').filter(Boolean);
  const uniqueHashtags = new Set(hashtags);

  return uniqueHashtags.size === hashtags.length;
};

export function initUploadForm() {
  const pristine = new Pristine(form, config);

  // Добавляем валидаторы с соответствующими сообщениями об ошибках
  pristine.addValidator(hashtagInput, validateHashtagCount, 'превышено количество хэштегов', 1, false);
  pristine.addValidator(hashtagInput, validateHashtagFormat, 'введён невалидный хэштег', 2, false);
  pristine.addValidator(hashtagInput, validateHashtagUniqueness, 'хэштеги повторяются', 3, false);

  uploadFileControl.addEventListener('change', () => {
    openModal(overlayForm);
  });
}
