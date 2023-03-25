import base from '../src/index.js';
import getRandomNumber from '../src/getRandomNumber.js';

const primeGame = () => {
  const number = getRandomNumber(100);
  const question = number;

  let result = 'yes';
  if (number === 0) result = 'no';
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      result = 'no';
    }
  }
  return [question, result];
};

const prime = () => {
  const primeNote = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  base(primeNote, primeGame);
};

export default prime;
