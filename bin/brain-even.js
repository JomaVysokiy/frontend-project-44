#!/usr/bin/env node
import readlineSync from 'readline-sync'
const game = () => {
  
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
       
  for (let i = 0 ; i < 3 ; i++) {

    const number = Math.ceil(Math.random() * 100)
    console.log('Question: ' + number)
    const answer = readlineSync.question('Your answer: ')

    if (number % 2 === 0 && answer === 'yes' || number % 2 !== 0 && answer === 'no') {
      console.log('Correct!')  
        } else {      
      const numberIsEven = () => number % 2 === 0  
        if (numberIsEven(number) && answer === 'yes' || (!numberIsEven(number)) && answer === 'no') {
          console.log(answer)
          console.log('Correct!')
        } else {
        if (answer === 'yes') {
          console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`)
          console.log(`Let's try again, ${name}!`)
          break
        } else if (answer === 'no') {
          console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.`)
          console.log(`Let's try again, ${name}!`)
          break
        }
      }
    }
  }
  console.log(`Congratulations, ${name}!`)
}

game()
