import runGame from '../index.js';
import getRandom from '../utility.js';

const getResult = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const showEven = () => {
  const random = getRandom();
  const result = getResult(random);
  const question = random;

  return [result, question];
};

const getEven = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(rule, showEven);
};

export default getEven;
