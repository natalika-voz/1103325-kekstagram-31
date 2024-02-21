function checkStringLength(string, length) {
  if (string.length <= length) {
    return true;
  } else {
    return false;
  }
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

  if (string === reversed) {
    return true;
  } else {
    return false;
  }
}
checkIsPalindrom('mom');//true
checkIsPalindrom('academy');//false
