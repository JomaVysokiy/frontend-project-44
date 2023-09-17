import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const runGame = () => {
  const number = getRandomNumber(0, 100);
  const question = number.toString();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEvenGame = () => {
  runEngine(description, runGame);
};
export default runEvenGame;
