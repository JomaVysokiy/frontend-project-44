import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber(0, 100);
  const question = number.toString();
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, answer];
};

const runEvenGame = () => {
  runEngine(description, generateRound);
};
export default runEvenGame;
