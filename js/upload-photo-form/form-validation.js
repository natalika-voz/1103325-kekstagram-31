import Pristine from 'pristinejs';

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

export function initFormValidation(formEl, hashtagInput) {
  const pristine = new Pristine(formEl, config);

  // Добавляем валидаторы с соответствующими сообщениями об ошибках
  pristine.addValidator(hashtagInput, validateHashtagCount, 'превышено количество хэштегов', 1, false);
  pristine.addValidator(hashtagInput, validateHashtagFormat, 'введён невалидный хэштег', 2, false);
  pristine.addValidator(hashtagInput, validateHashtagUniqueness, 'хэштеги повторяются', 3, false);
}
