import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const showMistake = (name, answer, result) => {
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${result}'.`,
  );
  console.log(`Let's try again, ${name}!`);
};

export const showCongratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const getRandom = () => Math.floor(Math.random() * 100);

export const getRandomMinMax = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const iteration = (func, name) => {
  for (let i = 1; i <= 3; i += 1) {
    const isRightAnswer = func(name);
    if (!isRightAnswer) {
      return false;
    }
  }
  return true;
};

export const runGame = (rule, game) => {
  const userName = greeting();
  console.log(rule);
  const allAnswersRight = iteration(game, userName);
  if (allAnswersRight) {
    showCongratulations(userName);
  }
};
