import readlineSync from 'readline-sync';

import {
  greeting,
  showMistake,
  showCongratulations,
  getRandom,
  iteration,
} from '../index.js';

const bigGcd = name => {
  const number1 = getRandom();
  const number2 = getRandom();

  const gsd = (num1, num2) => {
    const divisor = [];
    for (let i = 1; i <= 100; i += 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        divisor.push(i);
      }
    }
    return Math.max.apply(null, divisor);
  };

  const result = gsd(number1, number2);
  console.log(`Question: ${number1} ${number2}`);
  const answer = readlineSync.question('Your answer: ');

  if (result === +answer) {
    console.log('Correct!');
    return true;
  }
  showMistake(name, answer, result);
  return false;
};

const userGcd = () => {
  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  const allAnswersRight = iteration(bigGcd, userName);
  if (allAnswersRight) {
    showCongratulations(userName);
  }
};

export default userGcd;
