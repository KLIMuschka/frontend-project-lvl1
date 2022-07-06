import engineOfGames from '../index.js';
import getRandom from '../utility.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getResult = (num) => (getPrime(num) ? 'yes' : 'no');

const getData = () => {
  const isquestion = getRandom();
  const result = getResult(isquestion);

  const question = `${isquestion}`;

  return [result, question];
};

const playGame = () => {
  engineOfGames(description, getData);
};

export default playGame;
