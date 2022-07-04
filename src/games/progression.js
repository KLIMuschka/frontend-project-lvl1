import runGame from '../index.js';
import getRandom from '../utility.js';

const showProgression = () => {
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

  return [result, question];
};

const getProgression = () => {
  const rule = 'What number is missing in the progression?';
  runGame(rule, showProgression);
};

export default getProgression;
