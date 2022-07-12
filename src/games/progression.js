import engineOfGames from '../index.js';
import getRandom from '../utility.js';

const description = 'What number is missing in the progression?';

const generateOfProgression = (length, startNumber, stepOfProgression) => {
  const array = [];
  for (let i = 0; i <= length; i += 1) {
    array.push(startNumber + stepOfProgression * i);
  }
  return array;
};

const getRoundData = () => {
  const startNumber = getRandom(1, 3);
  const totalNumbers = 10;
  const stepOfProgression = getRandom(2, 6);
  const index = getRandom(0, 9);

  const progression = generateOfProgression(
    totalNumbers,
    startNumber,
    stepOfProgression,
  );
  const hiddenNumber = progression[index];
  progression[index] = '..';
  const question = progression.join(' ');

  return [hiddenNumber, question];
};

const playGame = () => {
  engineOfGames(description, getRoundData);
};

export default playGame;
