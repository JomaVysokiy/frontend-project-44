import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const number = getRandomNumber(0, 100);
  const question = number.toString();
  const answer = isPrime(number) === false ? 'no' : 'yes';
  return [question, answer];
};

const runPrimeGame = () => {
  runEngine(description, generateRound);
};
export default runPrimeGame;
