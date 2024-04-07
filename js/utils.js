export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

export const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export const checkStringLength = (string, length) => string.length <= length;

export const checkIsPalindrome = (string) => {
  let reversed = '';

  for (let i = 0; i < string.length; i++) {
    reversed = string[i] + reversed;
  }

  return string === reversed;
};
