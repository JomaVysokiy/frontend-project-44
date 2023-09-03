#!/usr/bin/env node
import game from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
    const runGame = () => {
        const num1 = Math.ceil(Math.random() * 100);
        const num2 = Math.ceil(Math.random() * 100);

        const question = `${num1} ${num2}`;

        function gcd(a, b) {
            if (b === 0) {
                return a;
            };
            return gcd(b, a % b);
        };
        
        const correctAnswer = `${gcd(num1,num2)}`;
        return [question,correctAnswer];
    };
    game(description,runGame);
};

export default gcdGame;