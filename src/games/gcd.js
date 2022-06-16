import readlineSync from 'readline-sync';

import { showMistake, getRandom, runGame } from '../index.js';

const bigGcd = (name) => {
  const number1 = getRandom();
  const number2 = getRandom();

  const gsd = (num1, num2) => {
    if (num2 > num1) {
      return gsd(num2, num1);
    }
    if (num2 === 0) {
      return num1;
    }
    return gsd(num2, num1 % num2);
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
  const rule = 'Find the greatest common divisor of given numbers.';
  runGame(rule, bigGcd);
};

export default userGcd;
