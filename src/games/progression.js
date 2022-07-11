import engineOfGames from '../index.js';
import getRandom from '../utility.js';

const description = 'What number is missing in the progression?';

const generateOfProgression = (
  totalNumbers,
  startNumber,
  stepOfProgression,
) => {
  const array = [];
  const total = totalNumbers * stepOfProgression;
  for (let i = startNumber; i <= total; i += stepOfProgression) {
    array.push(i);
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
