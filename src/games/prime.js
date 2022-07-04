import runGame from '../index.js';
import getRandom from '../utility.js';

const findPrime = (num) => {
  if (num < 2) {
    return 'no';
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const showPrime = () => {
  const isquestion = getRandom();
  const result = findPrime(isquestion);
  const question = `${isquestion}`;

  return [result, question];
};

const getPrime = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(rule, showPrime);
};

export default getPrime;
