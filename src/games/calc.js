import readlineSync from 'readline-sync';

import { showMistake, getRandom, runGame } from '../index.js';

const bigCalc = (name) => {
  const randomOperations = () => {
    const random = getRandom();
    if (random <= 33) {
      return '+';
    }
    if (random > 33 && random < 66) {
      return '-';
    }
    return '*';
  };
  const operation = randomOperations();
  const number1 = Math.floor(Math.random() * 30);
  const number2 = Math.floor(Math.random() * 30);
  let result;
  if (operation === '+') {
    result = number1 + number2;
  } else if (operation === '-') {
    result = number1 - number2;
  } else {
    result = number1 * number2;
  }
  console.log(`Question: ${number1} ${operation} ${number2}`);
  const answer = readlineSync.question('Your answer: ');

  if (result === +answer) {
    console.log('Correct!');
    return true;
  }
  showMistake(name, answer, result);
  return false;
};

const userCalc = () => {
  const rule = 'What is the result of the expression?';
  runGame(rule, bigCalc);
};

export default userCalc;
