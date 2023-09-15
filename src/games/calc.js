import game from '../index.js';
import getRandomNumber from '../generateRandomNumber.js';

const description = 'What is the result of the expression?';

function getCorrectAnswer(number1, number2, operation) {
  let correctAnswer = 0;
  switch (operation) {
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
  return correctAnswer;
}

const runCalcGame = () => {
  const runGame = () => {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const operations = ['+', '-', '*'];
    // const randomOperation = operations[Math.floor(Math.random() * operations.length)];
    const lengtOfOperations = operations.length - 1;
    const randomOperation = operations[getRandomNumber(0, lengtOfOperations)];
    const question = `${number1} ${randomOperation} ${number2}`;

    const correctAnswer = getCorrectAnswer(number1, number2, randomOperation);

    return [question, correctAnswer];
  };
  game(description, runGame);
};
export default runCalcGame;
