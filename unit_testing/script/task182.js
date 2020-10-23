/*
182. Даны натуральное число n, целые числа a1, … , an. Найти
количество и сумму тех членов данной последовательности, которые
делятся на 5 и не делятся на 7.
 */

function findNumbers(n, ...rest) {
  if (rest.length === 0) {
    for (let i = 0; i <= n; i++) {
      rest.push(i);
    }
  }
  let result = {};
  const results = rest.filter(item => item % 5 === 0 && item % 7 !== 0);
  result.sum = results.reduce((sum, item) => sum + item, 0);
  result.quantity = results.length;
 return result;
}

module.exports = findNumbers;
