import engineOfGames from '../index.js';
import getRandom from '../utility.js';

const description = 'What is the result of the expression?';

const getResult = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operation: '${operation}'!`);
  }
};

const operations = ['+', '-', '*'];

const getRoundData = () => {
  const operation = operations[getRandom(0, operations.length - 1)];
  const number1 = getRandom(0, 30);
  const number2 = getRandom(0, 30);

  const result = getResult(number1, number2, operation);

  const question = `${number1} ${operation} ${number2}`;

  return [result, question];
};

const playGame = () => {
  engineOfGames(description, getRoundData);
};

export default playGame;
