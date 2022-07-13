import engineOfGames from '../index.js';
import getRandomNumber from '../utility.js';

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

const getRoundData = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const result = getGcd(number1, number2);
  const question = `${number1} ${number2}`;

  return [result, question];
};

const playGame = () => {
  engineOfGames(description, getRoundData);
};

export default playGame;
