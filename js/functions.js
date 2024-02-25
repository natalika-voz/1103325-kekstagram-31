function checkStringLength(string, length) {
  return string.length <= length;
}

checkStringLength('проверяемая строка', 20); // true
checkStringLength('проверяемая строка', 18); // true
checkStringLength('проверяемая строка', 10); // false

// Вторая функция
function checkIsPalindrom(string) {
  let reversed = '';
  for (let i = 0; i < string.length; i++) {
    reversed = string[i] + reversed;
  }

  return string === reversed;
}

checkIsPalindrom('mom');//true
checkIsPalindrom('academy');//false
