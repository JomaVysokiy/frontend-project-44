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
  
  let rightAnswers = 0
  
  for (let i = 0 ; i < 3 ; i++) {
    // const number = Math.ceil(Math.random() * 100)
    console.log('Question: ' + numbers[i])
    const answer = readlineSync.question('Your answer: ')

    const numberIsEven = (number) => number % 2 === 0  
    const isCorrectAnswer = (answer) => {
        if (numberIsEven(numbers[i]) && answer === 'yes') {         
          return true
        }
        if (!numberIsEven(numbers[i]) && answer === 'no') {
          return true
        }
      }

    // const isCorrectAnswer2 = (answer) => {     
    //   if (numberIsEven(numbers[i]) && answer === 'yes') {
    //       answer = 'yes'
    //     } else if (!numberIsEven(numbers[i]) && answer === 'no') {
    //       answer = 'no'
    //     }
    // }

    if (isCorrectAnswer(answer)) {
      console.log('Correct!')
      rightAnswers += 1
      if (rightAnswers === 3) {
        console.log(`Congratulations, ${name}!`)
      }
    } else {                 
      if (numberIsEven(numbers[i]) && answer === 'yes') {
        const correctAnswer = 'yes'
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
        break
      } else if (!numberIsEven(numbers[i]) && answer === 'no') {
        const correctAnswer = 'no'
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
        break
      }
    
      if (answer === 'yes' ) {
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