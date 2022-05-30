import readlineSync from 'readline-sync';

import {
  greeting,
  showMistake,
  showCongratulations,
  getRandom,
  iteration,
} from '../index.js';

const bigPrime = name => {
  const getPrime = num => {
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

  const question = getRandom();
  const result = getPrime(question);

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  if (result === 'yes' && answer === 'yes') {
    console.log('Correct!');
    return true;
  }
  if (result === 'no' && answer === 'no') {
    console.log('Correct!');
    return true;
  }
  showMistake(name, answer, result);
  return false;
};

const userPrime = () => {
  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const allAnswersRight = iteration(bigPrime, userName);
  if (allAnswersRight) {
    showCongratulations(userName);
  }
};

export default userPrime;
