import runGame from '../index.js';
import getRandom from '../utility.js';

const getOperation = () => {
  const array = ['+', '-', '*'];
  return array[getRandom(0, array.length - 1)];
};

const getResult = (number1, number2, operation) => {
  if (operation === '+') {
    return number1 + number2;
  }
  if (operation === '-') {
    return number1 - number2;
  }
  return number1 * number2;
};

const showCalc = () => {
  const operation = getOperation();
  const number1 = getRandom(0, 30);
  const number2 = getRandom(0, 30);

  const result = getResult(number1, number2, operation);

  const question = `${number1} ${operation} ${number2}`;

  return [result, question];
};

const getCalc = () => {
  const rule = 'What is the result of the expression?';
  runGame(rule, showCalc);
};

export default getCalc;
