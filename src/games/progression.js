#!/usr/bin/env node
import game from '../index.js';
import getRandomNumber from '../generateRandomNumber.js';

const description = 'What number is missing in the progression?';

const runProgressionGame = () => {
  const runGame = () => {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();

    function getProgression(firstNumber, secondNumber) {
      const progression = [firstNumber];
      for (let i = 0; i <= 8; i += 1) {
        progression.push(progression[i] + secondNumber);
      }
    }

    const progression = getProgression(number1, number2);
    const randomIndex = Math.ceil(Math.random() * 9);
    const correctAnswer = `${progression[randomIndex]}`;
    progression[randomIndex] = '..';
    const question = `${progression.join(' ')}`;
    return [question, correctAnswer];
  };
  game(description, runGame);
};
export default runProgressionGame;
