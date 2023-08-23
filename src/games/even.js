#!/usr/bin/env node
import readlineSync from 'readline-sync'
const game = () => { 
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
       
  for (let i = 0 ; i < 3 ; i++) {
    const num = Math.ceil(Math.random() * 100)
    
    console.log('Question: ' + num)
    const answer = readlineSync.question('Your answer: ')

    const numberIsEven = (num) => num % 2 === 0   

    let correctAnswer = 'yes'
    if (!numberIsEven(num)) {
      correctAnswer = 'no'
    }

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    } else {
      console.log('Correct!')
    }
  }
  console.log(`Congratulations, ${name}!`)
}

game()