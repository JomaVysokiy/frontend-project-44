import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What is the result of the expression?';

function getCorrectAnswer(number1, number2, operation) {
  switch (operation) {
    case '+':
      return `${number1 + number2}`;
    case '-':
      return `${number1 - number2}`;
    case '*':
      return `${number1 * number2}`;
    default:
      throw new Error(`Unknown order state: '${operation}'!`);
  }
}

const runGame = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const operations = ['+', '-', '*'];

  const randomOperation = operations[getRandomNumber(0, operations.length)];

  const question = `${number1} ${randomOperation} ${number2}`;
  const correctAnswer = getCorrectAnswer(number1, number2, randomOperation);

  return [question, correctAnswer];
};

const runCalcGame = () => {
  runEngine(description, runGame);
};
export default runCalcGame;
