import readlineSync from 'readline-sync';

const countOfRounds = 3;

const engineOfGames = (description, game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  for (let i = 1; i <= countOfRounds; i += 1) {
    const gameResult = game();
    console.log(`Question: ${gameResult[1]}`);
    const answer = readlineSync.question('Your answer: ');
    const result = gameResult[0];
    if (String(result) !== String(answer)) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${result}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default engineOfGames;
