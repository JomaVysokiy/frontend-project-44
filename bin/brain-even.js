#!/usr/bin/env node
import readlineSync from 'readline-sync'
const game = () => {
  
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
       

const randomNumber1 = Math.ceil(Math.random() * 100)
const randomNumber2 = Math.ceil(Math.random() * 100)
const randomNumber3 = Math.ceil(Math.random() * 100)
const numbers = [randomNumber1,randomNumber2,randomNumber3]
const [ , , last ] = numbers

  for (let i = 0 ; i < 3 ; i++) {
    // const number = Math.ceil(Math.random() * 100)
    console.log('Question: ' + numbers[i])
    const answer = readlineSync.question('Your answer: ')

    const numberIsEven = (number) => number % 2 === 0  
    const correctAnswer = (answer) => {
        if (numberIsEven(numbers[i]) && answer === 'yes' 
        || (!numberIsEven(numbers[i])) && answer === 'no') {
          return true
        }
      }

    if (correctAnswer(answer)) {
      console.log('Correct!')
      if (numberIsEven(last) && answer === 'yes' 
      || (!numberIsEven(last)) && answer === 'no') {
        console.log(`Congratulations, ${name}!`)
      }
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

game()