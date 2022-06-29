import {
  runGame,
  showMistake,
  getQuestion,
  getAnswer,
  isRight,
} from '../index.js';
import getRandom from '../utility.js';

const bigEven = (name) => {
  let result;
  const random = getRandom();
  const question = random;
  getQuestion(question);
  const answer = getAnswer();
  if (random % 2 === 0) {
    result = 'yes';
  }
  if (random % 2 !== 0) {
    result = 'no';
  }

  if (random % 2 === 0 && answer === 'yes') {
    isRight();
    return true;
  }
  if (random % 2 !== 0 && answer === 'no') {
    isRight();
    return true;
  }
  showMistake(name, answer, result);
  return false;
};

const userEven = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(rule, bigEven);
};

export default userEven;
