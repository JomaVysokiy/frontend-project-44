#!/usr/bin/env node
import game from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const numberIsEven = (num) => num % 2 === 0;

const evenGame = () => {
    const runGame = () => {
      const num = Math.ceil(Math.random() * 100);
      const question = `${num}`;
        
      let correctAnswer = 'yes';

      if (!numberIsEven(num)) {
        correctAnswer = 'no';
      };
      
      return [question,correctAnswer];
    };
    game(description,runGame);
};
    
export default evenGame;
