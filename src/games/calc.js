import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What is the result of the expression?';

function calculate(number1, number2, operation) {
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

const generateRound = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const operations = ['+', '-', '*'];

  const randomOperation = operations[getRandomNumber(0, operations.length - 1)];

  const question = `${number1} ${randomOperation} ${number2}`;
  const answer = calculate(number1, number2, randomOperation);

  return [question, answer];
};

const runCalcGame = () => {
  runEngine(description, generateRound);
};
export default runCalcGame;
