import game from '../index.js';
import getRandomNumber from '../generateRandomNumber.js';

const description = 'What is the result of the expression?';

const runCalcGame = () => {
  const runGame = () => {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const operations = ['+', '-', '*'];
    const randomOperation = operations[Math.floor(Math.random() * operations.length)];
    const question = `${number1} ${randomOperation} ${number2}`;

    let correctAnswer = 0;
    switch (randomOperation) {
      case '+':
        correctAnswer = `${number1 + number2}`;
        break;
      case '-':
        correctAnswer = `${number1 - number2}`;
        break;
      case '*':
        correctAnswer = `${number1 * number2}`;
        break;
      default:
        correctAnswer = null;
    }
    return [question, correctAnswer];
  };
  game(description, runGame);
};
export default runCalcGame;
