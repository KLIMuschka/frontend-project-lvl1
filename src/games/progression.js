import {
  showMistake,
  runGame,
  getQuestion,
  getAnswer,
  isRight,
} from '../index.js';
import getRandom from '../utility.js';

const bigProgression = (name) => {
  let startNumber = getRandom(1, 3);
  const totalNumbers = 10;
  const stepOfProgression = getRandom(2, 6);
  const index = getRandom(0, 9);
  const array = [];

  for (let i = 1; i <= totalNumbers; i += 1) {
    startNumber += stepOfProgression;
    array.push(startNumber);
  }

  const result = array[index];
  array[index] = '..';
  const isquestion = array.join(' ');

  const question = `${isquestion}`;
  getQuestion(question);
  const answer = getAnswer();

  if (result === +answer) {
    isRight();
    return true;
  }
  showMistake(name, answer, result);
  return false;
};

const userProgression = () => {
  const rule = 'What number is missing in the progression?';
  runGame(rule, bigProgression);
};

export default userProgression;
