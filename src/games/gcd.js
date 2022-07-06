import engineOfGames from '../index.js';
import getRandom from '../utility.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num2 > num1) {
    return getGcd(num2, num1);
  }
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

const getData = () => {
  const number1 = getRandom();
  const number2 = getRandom();
  const result = getGcd(number1, number2);
  const question = `${number1} ${number2}`;

  return [result, question];
};

const playGame = () => {
  engineOfGames(description, getData);
};

export default playGame;
