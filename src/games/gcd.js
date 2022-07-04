import runGame from '../index.js';
import getRandom from '../utility.js';

const runGcd = (num1, num2) => {
  if (num2 > num1) {
    return runGcd(num2, num1);
  }
  if (num2 === 0) {
    return num1;
  }
  return runGcd(num2, num1 % num2);
};

const showGcd = () => {
  const number1 = getRandom();
  const number2 = getRandom();
  const result = runGcd(number1, number2);
  const question = `${number1} ${number2}`;

  return [result, question];
};

const getGcd = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  runGame(rule, showGcd);
};

export default getGcd;
