#!/usr/bin/env node
import game from '../index.js';
import getRandomNumber from '../generateRandomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

const runGcdGame = () => {
  const runGame = () => {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();

    const question = `${number1} ${number2}`;

    function gcd(a, b) {
      return (b === 0) ? a : gcd(b, a % b);
    }

    const correctAnswer = `${gcd(number1, number2)}`;
    return [question, correctAnswer];
  };
  game(description, runGame);
};
export default runGcdGame;
