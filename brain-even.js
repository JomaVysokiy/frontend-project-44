#!/usr/bin/env node
import readlineSync from 'readline-sync'
const game = () => { 
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
       
  for (let i = 0 ; i < 3 ; i++) {
    let number = Math.ceil(Math.random() * 100)
    
    console.log('Question: ' + number)
    const yourAnswer = readlineSync.question('Your answer: ')

    const numberIsEven = (number) => number % 2 === 0   

    let correctAnswer = 'yes'
    if (!numberIsEven(number)) {
      correctAnswer = 'no'
    }

    if (yourAnswer !== correctAnswer) {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    } else {
      console.log('Correct!')         
    }    
  }      
console.log(`Congratulations, ${userName}!`)
}

game()