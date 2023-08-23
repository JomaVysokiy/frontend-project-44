#!/usr/bin/env node
import readlineSync from 'readline-sync'
const game = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
  
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  
    for (let i = 0; i < 3; i += 1) {
        const number = Math.ceil(Math.random() * 100)
        const question = `${number}`

        let correctAnswer = ''

        if (number < 2) {
            correctAnswer = 'no'
        }

        for (let i = 2; i <= Math.sqrt(number); i++) {
            number % i === 0 ? correctAnswer = 'no' : correctAnswer = 'yes'
        }
        
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
}

game()