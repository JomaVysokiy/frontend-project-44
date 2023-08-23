#!/usr/bin/env node
import readlineSync from 'readline-sync'
const game = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
  
    console.log('Find the greatest common divisor of given numbers.');
  
    for (let i = 0; i < 3; i += 1) {
        
        const number1 = Math.ceil(Math.random() * 100)
        const number2 = Math.ceil(Math.random() * 100)

        const progression = [number1] 
        for (let i = 0;i < 10; i++) {
            progression.push(progression[i] + number2)
        }
      
        const randomIndex = Math.ceil(Math.random() * 10)
        const correctAnswer = `${progression[randomIndex]}`
        progression[randomIndex] = '..'
        const question = `${progression}`
        
        console.log(`Question: ${question}`);
        console.log(`Подсказка: ${correctAnswer}`)
        const yourAnswer = readlineSync.question('Your answer: ');
  
        if (yourAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }
    console.log(`Congratulations, ${userName}!`)
  };

game()