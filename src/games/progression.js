import readlineSync from 'readline-sync';

import {
  greeting,
  showMistake,
  showCongratulations,
  getRandomMinMax,
  iteration,
} from '../index.js';

const bigProgression = (name) => {
  let startNumber = getRandomMinMax(1, 3);
  const totalNumbers = 10;
  const stepOfProgression = getRandomMinMax(2, 6);
  const index = getRandomMinMax(0, 9);
  const array = [];

  for (let i = 1; i <= totalNumbers; i += 1) {
    startNumber += stepOfProgression;
    array.push(startNumber);
  }

  const result = array[index];
  array[index] = '..';
  const question = array.join(' ');

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  if (result === +answer) {
    console.log('Correct!');
    return true;
  }
  showMistake(name, answer, result);
  return false;
};

const userProgression = () => {
  const userName = greeting();
  console.log('What number is missing in the progression?');
  const allAnswersRight = iteration(bigProgression, userName);
  if (allAnswersRight) {
    showCongratulations(userName);
  }
};

export default userProgression;
