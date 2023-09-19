import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';

function getGcd(a, b) {
  return (b === 0) ? a : getGcd(b, a % b);
}

const generateRound = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const question = `${number1} ${number2}`;
  const answer = `${getGcd(number1, number2)}`;
  return [question, answer];
};

const runGcdGame = () => {
  runEngine(description, generateRound);
};
export default runGcdGame;
