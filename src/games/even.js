import readlineSync from 'readline-sync';

import {
  greeting,
  showMistake,
  showCongratulations,
  getRandom,
  iteration,
} from '../index.js';

const bigEven = (name) => {
  let result;
  const random = getRandom();

  console.log(`Question: ${random}`);
  const answer = readlineSync.question('Your answer: ');
  if (random % 2 === 0) {
    result = 'yes';
  }
  if (random % 2 !== 0) {
    result = 'no';
  }

  if (random % 2 === 0 && answer === 'yes') {
    console.log('Correct!');
    return true;
  }
  if (random % 2 !== 0 && answer === 'no') {
    console.log('Correct!');
    return true;
  }
  showMistake(name, answer, result);
  return false;
};

const userEven = () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const allAnswersRight = iteration(bigEven, userName);
  if (allAnswersRight) {
    showCongratulations(userName);
  }
};

export default userEven;
