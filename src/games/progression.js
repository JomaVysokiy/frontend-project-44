#!/usr/bin/env node
import game from '../index.js';
import getRandomNumber from '../generateRandomNumber.js';

const description = 'What number is missing in the progression?';

function getProgression(firstNumber, secondNumber, length = 10) {
  const progression = [firstNumber];
  const numberOfProgressionValues = length - 2;
  for (let i = 0; i <= numberOfProgressionValues; i += 1) {
    progression.push(progression[i] + secondNumber);
  }
  return progression;
}

const runProgressionGame = () => {
  const runGame = () => {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();

    const progression = getProgression(number1, number2);
    const lengthOfProgression = 10 - 1;
    const randomIndex = getRandomNumber(0, lengthOfProgression);

    const correctAnswer = progression[randomIndex].toString();
    progression[randomIndex] = '..';
    const question = `${progression.join(' ')}`;

    return [question, correctAnswer];
  };
  game(description, runGame);
};
export default runProgressionGame;
