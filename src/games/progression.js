import engineOfGames from '../index.js';
import getRandom from '../utility.js';

const description = 'What number is missing in the progression?';

const getData = () => {
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
  const question = array.join(' ');

  return [result, question];
};

const playGame = () => {
  engineOfGames(description, getData);
};

export default playGame;
