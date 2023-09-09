import game from '../index.js';

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const calcGame = () => {
  const runGame = () => {
    const num1 = Math.ceil(Math.random() * 100);
    const num2 = Math.ceil(Math.random() * 100);
    const randomOperation = operations[Math.floor(Math.random() * operations.length)];
    const question = `${num1} ${randomOperation} ${num2}`;
    let correctAnswer = 0;
    if (randomOperation === '+') {
      const result = num1 + num2;
      correctAnswer = `${result}`;
    }
    if (randomOperation === '-') {
      const result = num1 - num2;
      correctAnswer = `${result}`;
    }
    if (randomOperation === '*') {
      const result = num1 * num2;
      correctAnswer = `${result}`;
    }

    return [question, correctAnswer];
  };
  game(description, runGame);
};
export default calcGame;
