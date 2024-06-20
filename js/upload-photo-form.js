import Pristine from 'pristinejs';

const formEl = document.querySelector('.img-upload__form');
const uploadFileControlEl = formEl.querySelector('#upload-file');
const overlayFormEl = formEl.querySelector('.img-upload__overlay');
const hashtagInputEl = formEl.querySelector('.text__hashtags');

const config = {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
};

// Утилитная функция для нормализации хэштегов до нижнего регистра
function normalizeHashtags(value) {
  return value.split(' ').map((hashtag) => hashtag.toLowerCase());
}

// Проверка количества хэштегов
const validateHashtagCount = (value) => {
  const hashtags = normalizeHashtags(value);
  return hashtags.length <= 5;
};

// Проверка формата хэштегов
const validateHashtagFormat = (value) => {
  const hashtags = normalizeHashtags(value);
  const regex = /^#[A-Za-z0-9]{1,19}$/;

  return hashtags.every((hashtag) => regex.test(hashtag));
};

// Проверка уникальности хэштегов
const validateHashtagUniqueness = (value) => {
  const hashtags = normalizeHashtags(value);
  const uniqueHashtags = new Set(hashtags);

  return uniqueHashtags.size === hashtags.length;
};

function initFormValidation(form, hashtagInput) {
  const pristine = new Pristine(form, config);

  // Добавляем валидаторы с соответствующими сообщениями об ошибках
  pristine.addValidator(hashtagInput, validateHashtagCount, 'превышено количество хэштегов', 1, false);
  pristine.addValidator(hashtagInput, validateHashtagFormat, 'введён невалидный хэштег', 2, false);
  pristine.addValidator(hashtagInput, validateHashtagUniqueness, 'хэштеги повторяются', 3, false);
}

export function resetForm() {
  uploadFileControlEl.value = '';
}

export function initUploadForm() {
  initFormValidation(formEl, hashtagInputEl);

  uploadFileControlEl.addEventListener('change', () => {
    const closeEl = overlayFormEl.querySelector('.cancel');

    overlayFormEl.classList.remove('hidden');
    document.body.classList.add('modal-open');

    closeEl.addEventListener(
      'click',
      () => {
        overlayFormEl.classList.add('hidden');
        document.body.classList.remove('modal-open');
        resetForm();
      },
      { once: true }
    );
  });
}
