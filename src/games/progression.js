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
      const numberOfProgressionValues = 10 - 2;
      for (let i = 0; i <= numberOfProgressionValues; i += 1) {
        progression.push(progression[i] + secondNumber);
      }
      return progression;
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
