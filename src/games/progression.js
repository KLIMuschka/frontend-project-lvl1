import engineOfGames from '../index.js';
import getRandom from '../utility.js';

const description = 'What number is missing in the progression?';

const generateOfProgression = (num1, num2, num3) => {
  const array = [];
  let num4 = num2;
  for (let i = 1; i <= num1; i += 1) {
    num4 += num3;
    array.push(num4);
  }
  return array;
};

const getData = () => {
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
  engineOfGames(description, getData);
};

export default playGame;
