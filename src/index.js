import readlineSync from 'readline-sync';

const countOfRounds = 3;

const engineOfGames = (description, getRoundData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let i = 1; i <= countOfRounds; i += 1) {
    const [result, question] = getRoundData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

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
