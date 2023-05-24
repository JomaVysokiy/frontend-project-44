#!/usr/bin/env node
import readlineSync from 'readline-sync'

const game = () => {
  
    console.log('Welcome to the Brain Games!')
    const name = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${name}!`)

    console.log('Answer "yes" if the number is even, otherwise answer "no".')

        const number = Math.ceil(Math.random() * 100)
        
        const str = readlineSync.question('Question: ' + number + ' ') 
        
        const arr2 = str.split(' ')
        const answer = arr2[arr2.length - 1]
        
        if (number % 2 === 0 && answer === 'yes' || number % 2 !== 0 && answer === 'no') {
          console.log('Correct!')  
        } else {        
          console.log('Your answer: ' + number)

          if (answer === 'yes') {
            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`)
        } else if (answer === 'no') {
            console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.`)
        }

          console.log(`Let's try again, ${name}!`) 
        }
}

game()
