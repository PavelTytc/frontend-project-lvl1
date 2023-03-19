import getRandomNumber from '../src/getRandomNumber.js';
import base from '../src/index.js';

const gcdGame = () => {
  const number1 = getRandomNumber(50);
  const number2 = getRandomNumber(50);
  const question = `${number1} ${number2}`;

  let result = 0;
  if (number1 === 0) result = number2;
  for (let i = 1; i <= number1; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      result = i;
    }
  }
  return [question, result];
};

const gcd = () => {
  const gcdNote = 'Find the greatest common divisor of given numbers.';
  base(gcdNote, gcdGame);
};

export default gcd;
