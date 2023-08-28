#!/usr/bin/env node
import readlineSync from 'readline-sync'
import game from '../index.js'
// const game = () => { 
//   console.log('Welcome to the Brain Games!')
//   const userName = readlineSync.question('May I have your name? ')
//   console.log(`Hello, ${userName}!`)
//   console.log('Answer "yes" if the number is even, otherwise answer "no".')
       
//   for (let i = 0 ; i < 3 ; i++) {
//     const num = Math.ceil(Math.random() * 100)
    
//     console.log('Question: ' + num)
//     const answer = readlineSync.question('Your answer: ')

//     const numberIsEven = (num) => num % 2 === 0   

    // let correctAnswer = 'yes'
    // if (!numberIsEven(num)) {
    //   correctAnswer = 'no'
    // }

//     if (answer !== correctAnswer) {
//       console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
//       console.log(`Let's try again, ${userName}!`)
//       return
//     } else {
//       console.log('Correct!')
//     }
//   }
//   console.log(`Congratulations, ${userName}!`)
// }

const description = 'Answer "yes" if the number is even, otherwise answer "no".'
const numberIsEven = (num) => num % 2 === 0

    const evenGame = () => {
        const runGame = () => {
            const num = Math.ceil(Math.random() * 100)
            const question = `${num}`
            // correctAnswer
            let correctAnswer = 'yes'

            if (!numberIsEven(num)) {
              correctAnswer = 'no'
            }
            return [question,correctAnswer]
        }
        game(description,runGame)
    }
    

export default evenGame

// проблема может заключаться в составлении правильного ответа,так как для каждоый игры он создается по-разному