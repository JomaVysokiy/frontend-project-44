#!/usr/bin/env node
import game from '../index.js';
import getRandomNumber from '../generateRandomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const numberIsEven = (number) => number % 2 === 0;

const runEvenGame = () => {
  const runGame = () => {
    const number = getRandomNumber();
    const question = `${number}`;
    const correctAnswer = numberIsEven(number) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  game(description, runGame);
};
export default runEvenGame;
