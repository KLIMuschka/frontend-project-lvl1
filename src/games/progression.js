import engineOfGames from '../index.js';
import getRandom from '../utility.js';

const description = 'What number is missing in the progression?';

const generateOfProgression = (totalNumbers, result, stepOfProgression) => {
  const array = [];
  for (let i = 1; i <= totalNumbers; i += 1) {
    result += stepOfProgression;
    array.push(result);
  }
  return array;
};

const getRoundData = () => {
  const startNumber = getRandom(1, 3);
  const totalNumbers = 10;
  const stepOfProgression = getRandom(2, 6);
  const index = getRandom(0, 9);

  const getresult = generateOfProgression(
    totalNumbers,
    startNumber,
    stepOfProgression,
  );
  const result = getresult[index];
  getresult[index] = '..';
  const question = getresult.join(' ');

  return [result, question];
};

const playGame = () => {
  engineOfGames(description, getRoundData);
};

export default playGame;
