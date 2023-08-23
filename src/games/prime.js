#!/usr/bin/env node
import readlineSync from 'readline-sync'
const game = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const num = Math.ceil(Math.random() * 100)
    const question = `${num}`
      
    const isPrime = (num) => {
      if (num < 2) {
        return false
      }
    
      for (let i = 2; i <= Math.sqrt(num); i += 1) {
        return num % i === 0 ? false : true
      }
    }
    let correctAnswer = ''
    
    isPrime(num) === true ? correctAnswer = 'yes' : correctAnswer = 'no'
    console.log(`Question: ${question}`)
    const yourAnswer = readlineSync.question('Your answer: ')
    if (yourAnswer === correctAnswer) {
      console.log('Correct!')
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`)
}

game()