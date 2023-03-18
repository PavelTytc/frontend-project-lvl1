import base from '../src/index.js';
import getRandomNumber from '../src/getRandomNumber.js';

const operators = ['+', '-', '*'];
const indexOfOperator = (min, max) => Math.floor(Math.random() * (max - min) + min);
const getRandomOperator = () => operators[indexOfOperator(0, 3)];

const calcTask = () => {
  const number1 = getRandomNumber(50);
  const number2 = getRandomNumber(50);
  const operator = getRandomOperator(operators);

  const question = `${number1} ${operator} ${number2}`;

  let result = 0;
  if (operator === '+') {
    result = number1 + number2;
  }
  if (operator === '-') {
    result = number1 - number2;
  }
  if (operator === '*') {
    result = number1 * number2;
  }
  return [question, result];
};

const calc = () => {
  const calcNote = 'What is the result of the expression?';
  base(calcNote, calcTask);
};
export default calc;
