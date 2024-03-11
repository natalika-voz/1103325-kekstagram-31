// сделать функцию которая возвращает массив из 25 объектов
// структура каждого объекта содержит: id, url, description, likes, comments
const MOCK_POSTS_COUNT = 25;
const MOCK_COMMENTS_COUNT = 30;

const NAMES = [
  'Иван',
  'Дарья',
  'Мария',
  'Елена',
  'Виктор',
  'Юлия',
  'Алексей',
  'Андрей',
];

const DESCRIPTION = [
  'Доказательство того, что я могу делать селфи лучше, чем ты',
  'Мне не нужно ваше одобрение',
  'Все, что мы отдаем, возвращается вновь',
  'Цени моменты',
  'Улыбайся больше, смейся чаще',
  'Счастье никогда не выйдет из моды',
  'Счастье в мелочах',
  'Моя любимая часть этого образа – невидимая корона',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

// const createRandomIdFromRangeGenerator = (min, max) => {
//   const previousValues = [];

//   return function () {
//     let currentValue = getRandomInteger(min,max);
//     if (previousValues.length >= (max - min + 1)) {
//       return null;
//     }
//     while (previousValues.includes(currentValue)) {
//       currentValue = getRandomInteger(min,max);
//     }
//     previousValues.push(currentValue);
//     return currentValue;
//   };
// };

// const uniqId = createRandomIdFromRangeGenerator(0,10);
// uniqId();


const generateComment = (_, index) => ({
  id: index,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: COMMENTS[getRandomInteger(0, COMMENTS.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
});
// функция, которая создает массив из 30 комментариев
const generateComments = (length = MOCK_COMMENTS_COUNT) => Array.from({ length: length }, generateComment);

const generatePost = (_, index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
  likes: getRandomInteger(15, 200),
  comments: generateComments(),
});

// функция, которая создает массив из 25 объектов (постов)
const generatePosts = (length = MOCK_POSTS_COUNT) => Array.from({ length: length }, generatePost);

generatePosts();
