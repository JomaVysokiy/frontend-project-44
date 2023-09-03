#!/usr/bin/env node
import game from '../index.js';

const description = 'What number is missing in the progression?';

const progressionGame = () => {
    const runGame = () => {
        // первые два числа прогрессии
        const num1 = Math.ceil(Math.random() * 100);
        const num2 = Math.ceil(Math.random() * 100);
        // создание массива с первым числом
        const progression = [num1];
        // цикл
        for (let i = 0; i <= 8; i += 1) {
            progression.push(progression[i] + num2);
        };
        // создание индекса 
        const randomIndex = Math.ceil(Math.random() * 9);
        // правильный ответ
        const correctAnswer = `${progression[randomIndex]}`;
        // замена правильного ответа на '..'
        progression[randomIndex] = '..';
        // вопрос и возврат
        const question = `${progression.join(' ')}`;
        return [question, correctAnswer];
    };
    game(description, runGame);
};

export default progressionGame;