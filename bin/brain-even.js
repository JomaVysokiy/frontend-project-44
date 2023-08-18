#!/usr/bin/env node
import readlineSync from 'readline-sync'
const game = () => { 
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
       
  for (let i = 0 ; i < 3 ; i++) {
    let number = Math.ceil(Math.random() * 100)
    
    console.log('Question: ' + number)
    const answer = readlineSync.question('Your answer: ')

    const numberIsEven = (number) => number % 2 === 0  
    const isCorrectAnswer = (answer) => {
        if (numberIsEven(number) && answer === 'yes') {  
          return true 
        }
        if (!numberIsEven(number) && answer === 'no') {         
          return true
        }
      }

    if (isCorrectAnswer(answer)) {
      console.log('Correct!')
    } else {     
      const isNotCorrectAnswer = (answer) => {
        if (answer !== 'yes' || answer !== 'no') {
          return true
        }
      }

      // просто пропускает или не видит коректный ответ
    if (isNotCorrectAnswer(answer)) {
      if (numberIsEven(answer) && isCorrectAnswer(answer)) {
        const correctAnswer = 'yes'
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
        console.log(`Let's try again, ${name}!`)
        return
      } else if (!numberIsEven(number) && answer === 'no') {
        const correctAnswer = 'no'
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
        console.log(`Let's try again, ${name}!`)
        return
      }

    }
      
    // я пытался упростить эти условия но не могу вывести именно правильный ответ
      if (answer === 'yes' ) {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`)
        console.log(`Let's try again, ${name}!`)
        return
      } else if (answer === 'no') {
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.`)
        console.log(`Let's try again, ${name}!`)
        return
      }      
      break
    } 
  }
  console.log(`Congratulations, ${name}!`)
}

game()