import engineOfGames from '../index.js';
import getRandomNumber from '../utility.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getRoundData = () => {
  const question = getRandomNumber();
  const result = isEven(question) ? 'yes' : 'no';

  return [result, question];
};

const playGame = () => {
  engineOfGames(description, getRoundData);
};

export default playGame;
