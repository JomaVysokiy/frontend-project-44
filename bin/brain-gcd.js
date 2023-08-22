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

        let question = `${number1} ${number2}`

        function gcd(a, b) {
            if (b === 0) {
            return a
            }
            return gcd(b, a % b)
            }
        
        let correctAnswer = `${gcd(number1,number2)}`
        console.log(`Подсказка: ${correctAnswer}`)
        console.log(`Question: ${question}`);
  
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