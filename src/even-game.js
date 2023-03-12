import readlineSync from 'readline-sync';
import getRandomNumber from './getRandomNumber.js';

const base = (gameNote, task) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameNote);

  for (let i = 0; i < 3; i += 1) {
    const questionAndResult = task();
    console.log('Question:', questionAndResult[0].toString());
    const answer = readlineSync.question('Your answer: ');

    const rightAnswer = questionAndResult[1].toString();

    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

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
