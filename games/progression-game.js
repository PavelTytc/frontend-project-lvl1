import getRandomNumber from '../src/getRandomNumber.js';
import base from '../src/index.js';

const getRandomLength = (min, max) => Math.floor(Math.random() * (max - min) + min);

const progressionTask = () => {
  const start = getRandomNumber(100);
  const step = getRandomNumber(50);
  const length = getRandomLength(5, 10);
  const hiddenNumber = getRandomLength(0, length);

  let result = start;
  let hiddenProgression = '';
  let sum = start;
  let hiddenNum = 0;

  for (let i = 1; i < length; i += 1) {
    sum += step;
    result = `${result} ${sum}`;
    const arr = result.split(' ');
    hiddenNum = arr[hiddenNumber];
    arr[hiddenNumber] = '..';
    hiddenProgression = arr.join(' ');
  }
  const question = hiddenProgression;
  return [question, hiddenNum];
};

const progression = () => {
  const progressionNote = 'What number is missing in the progression?';
  base(progressionNote, progressionTask);
};

export default progression;
