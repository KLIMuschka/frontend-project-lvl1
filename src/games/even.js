import engineOfGames from '../index.js';
import getRandom from '../utility.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEven = (num) => num % 2 === 0;

const getResult = (num) => (getEven(num) ? 'yes' : 'no');

const getData = () => {
  const random = getRandom();
  const result = getResult(random);
  const question = random;

  return [result, question];
};

const playGame = () => {
  engineOfGames(description, getData);
};

export default playGame;
