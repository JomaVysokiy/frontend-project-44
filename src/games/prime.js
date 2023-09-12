#!/usr/bin/env node
import game from '../index.js';
import getRandomNumber from '../generateRandomNumber.js';

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

const runPrimeGame = () => {
  const runGame = () => {
    const number = getRandomNumber();
    const question = `${number}`;

    let correctAnswer = 'yes';

    if (isPrime(number) === false) {
      correctAnswer = 'no';
    }

    return [question, correctAnswer];
  };

  game(description, runGame);
};
export default runPrimeGame;
