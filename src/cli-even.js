import readlineSync from 'readline-sync';

const getRandom = () => Math.ceil(Math.random() * 99);

const userEven = () => {
  let evenORnot;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const random = getRandom();

    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer: ');
    if (random % 2 === 0) {
      evenORnot = 'yes';
    }
    if (random % 2 !== 0) {
      evenORnot = 'no';
    }

    if (random % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } else if (random % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${evenORnot}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default userEven;
