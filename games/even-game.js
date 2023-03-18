import getRandomNumber from '../src/getRandomNumber.js';
import base from '../src/index.js';

const evenTask = () => {
  const number = getRandomNumber(100);
  const question = number;

  const result = number % 2 === 0 ? 'yes' : 'no';
  return [question, result];
};

const even = () => {
  const evenNote = 'Answer "yes" if the number is even, otherwise answer "no".';
  base(evenNote, evenTask);
};

export default even;
