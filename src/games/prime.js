import {
  showMistake,
  runGame,
  getQuestion,
  getAnswer,
  isRight,
} from '../index.js';
import getRandom from '../utility.js';

const bigPrime = (name) => {
  const getPrime = (num) => {
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

  const isquestion = getRandom();
  const result = getPrime(isquestion);
  const question = `${isquestion}`;
  getQuestion(question);
  const answer = getAnswer();

  if (result === 'yes' && answer === 'yes') {
    isRight();
    return true;
  }
  if (result === 'no' && answer === 'no') {
    isRight();
    return true;
  }
  showMistake(name, answer, result);
  return false;
};

const userPrime = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(rule, bigPrime);
};

export default userPrime;
