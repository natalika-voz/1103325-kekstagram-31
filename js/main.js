// сделать функцию которая возвращает массив из 25 объектов
// структура каждого объекта содержит: id, url, description, likes, comments
const NAMES = [
  'Иван',
  'Дарья',
  'Мария',
  'Елена',
  'Виктор',
  'Юлия',
  'Артём',
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

// функция, которая создает массив из 25 объектов (постов)
function generatePosts(length = 25) {
  //создаем сначала пустой массив
  const result = [];

  // добавляем в массив объекты (посты)
  for (let i = 1; i <= length; i += 1) {
    result.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
      likes: getRandomInteger(15, 200),
      comments: generateComments(),
    });
  }

  return result;
}


function generateComments(length = 30) {
  //создаем сначала пустой массив
  const result = [];

  // добавляем в массив объекты (комментарии)
  for (let i = 1; i <= length; i += 1) {
    result.push({
      id: getRandomInteger(0, 2000),
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: COMMENTS[getRandomInteger(0, COMMENTS.length - 1)],
      name: NAMES[getRandomInteger(0, NAMES.length - 1)],
    });
  }

  return result;
}

generatePosts();
