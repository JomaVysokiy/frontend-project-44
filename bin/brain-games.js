#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { userName } from '/root/Project-1/frontend-project-44/src/cli.js' 

userName()

// const game = () => {

//     console.log('Welcome to the Brain Games!')
//     const name = readlineSync.question('May I have your name? ')
//     console.log(`Hello, ${name}!`)
    
//     console.log('Answer "yes" if the number is even, otherwise answer "no".')
    
//     const number = Math.ceil(Math.random() * 100)
        
//     const str = readlineSync.question('Question: ' + number + ' ') 
    
//     const arr2 = str.split(' ')
//     const answer = arr2[arr2.length - 1]

//     for (let i = 0 ; i < 3 ; i++) {

//             if (number % 2 === 0 && answer === 'yes' || number % 2 !== 0 && answer === 'no') {
//               console.log('Your answer: ' + number)
//               console.log('Correct!')  
//         } else {        
//               console.log('Your answer: ' + number)
//             if (answer === 'yes') {
//                 console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`)
//         } else if (answer === 'no') {
//             console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.`)
//         }
//             console.log(`Let's try again, ${name}!`) 
//             return 
//         }
//     }
//     return (`Congratulations, ${name}!`)
// }

// game()

// цикл сделать только для корректных вопросов