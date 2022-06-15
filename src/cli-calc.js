import readlineSync from "readline-sync";

const randomOperation = () => {
  const random = Math.ceil(Math.random() * 100);
  if (random <= 33) {
    return "+";
  }
  if (random > 33 && random < 66) {
    return "-";
  }
  return "*";
};

const userCalc = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log("What is the result of the expression?");

  for (let i = 1; i <= 3; i += 1) {
    const operation = randomOperation();
    const number1 = Math.ceil(Math.random() * 30);
    const number2 = Math.ceil(Math.random() * 30);
    let result;
    if (operation === "+") {
      result = number1 + number2;
    } else if (operation === "-") {
      result = number1 - number2;
    } else {
      result = number1 * number2;
    }
    console.log(`Question: ${number1} ${operation} ${number2}`);
    const answer = readlineSync.question("Your answer: ");

    if (result === +answer) {
      console.log("Correct!");
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${result}'.`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default userCalc;
