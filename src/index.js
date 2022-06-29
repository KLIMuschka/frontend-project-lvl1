import readlineSync from 'readline-sync';

/* export const greeting = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  return name;
}; */

export const showMistake = (name, answer, result) => {
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${result}'.`,
  );
  console.log(`Let's try again, ${name}!`);
};

/* export const showCongratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
}; */

const numberOfRounds = 3;

export const iteration = (func, name) => {
  for (let i = 1; i <= numberOfRounds; i += 1) {
    const isRightAnswer = func(name);
    if (!isRightAnswer) {
      return false;
    }
  }
  return true;
};

export const runGame = (rule, game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(rule);
  const allAnswersRight = iteration(game, name);
  if (allAnswersRight) {
    console.log(`Congratulations, ${name}!`);
  }
};

export const getQuestion = (question) => console.log(`Question: ${question}`);

export const getAnswer = () => readlineSync.question('Your answer: ');

export const isRight = () => console.log('Correct!');
