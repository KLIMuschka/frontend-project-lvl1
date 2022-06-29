import {
  showMistake,
  runGame,
  getQuestion,
  getAnswer,
  isRight,
} from '../index.js';
import getRandom from '../utility.js';

const getOperation = () => {
  const array = ['+', '-', '*'];
  return array[getRandom(0, 2)];
};

const bigCalc = (name) => {
  const operation = getOperation();
  const number1 = getRandom(0, 30);
  const number2 = getRandom(0, 30);
  let result;
  if (operation === '+') {
    result = number1 + number2;
  } else if (operation === '-') {
    result = number1 - number2;
  } else {
    result = number1 * number2;
  }
  const question = `${number1} ${operation} ${number2}`;
  getQuestion(question);
  const answer = getAnswer();

  if (result === +answer) {
    isRight();
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
