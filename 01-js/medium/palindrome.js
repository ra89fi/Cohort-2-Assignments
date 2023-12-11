/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let str2 = '';
  for (let i = 0; i < str.length; i++) {
    const cd = str.charCodeAt(i);
    if (cd >= 97 && cd <= 122) str2 += str[i];
  }
  const strRev = str2.split('').reverse().join('');
  return str2 === strRev;
}

module.exports = isPalindrome;
