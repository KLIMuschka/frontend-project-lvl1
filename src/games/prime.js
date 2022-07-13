import engineOfGames from '../index.js';
import getRandomNumber from '../utility.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
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

const getRoundData = () => {
  const randomNumber = getRandomNumber();
  const result = isPrime(randomNumber) ? 'yes' : 'no';

  return [result, randomNumber];
};

const playGame = () => {
  engineOfGames(description, getRoundData);
};

export default playGame;
