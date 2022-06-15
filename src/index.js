import readlineSync from "readline-sync";

export const greeting = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  return name;
};

export const showMistake = (name, answer, result) => {
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${result}'.`
  );
  console.log(`Let's try again, ${name}!`);
};

export const showCongratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const getRandom = () => Math.floor(Math.random() * 100);

<<<<<<< HEAD
export const getRandomMinMax = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
=======
export const getRandomMinMax = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
>>>>>>> 97d8963e27b8b9085f54b06f8664ea9c6da2a8fd

export const iteration = (func, name) => {
  for (let i = 1; i <= 3; i += 1) {
    const isRightAnswer = func(name);
    if (!isRightAnswer) {
      return false;
    }
  }
  return true;
};
