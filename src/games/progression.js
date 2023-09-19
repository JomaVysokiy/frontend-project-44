import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What number is missing in the progression?';

function getProgression(firstNumber, step, length) {
  const progression = [firstNumber];
  const lastIndex = length - 1;
  for (let i = 0; i < lastIndex; i += 1) {
    progression.push(progression[i] + step);
  }
  return progression;
}

const generateRound = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);

  const progression = getProgression(number1, number2);
  const randomIndex = getRandomNumber(0, progression.length - 1);

  const answer = progression[randomIndex].toString();
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const runProgressionGame = () => {
  runEngine(description, generateRound);
};
export default runProgressionGame;
