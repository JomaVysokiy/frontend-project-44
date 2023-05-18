#!/usr/bin/env node
 
// const evenOrOddNumber = () => {
//     if (number % 2 === 0) {
//         // console.log('число четное')
//         const even = number
//     } else {
//         // console.log('число нечетное')
//         const odd = number
//     }
// }

// let rightAnswer = ''

// if (number === even) {
//     rightAnswer = 'yes' 
// } else if (number === odd) {
//     rightAnswer = 'no'
// }

// if (number === even && rightAnswer === 'yes' || number === odd && rightAnswer === 'no') {
//     result = 'good'
// } else if (number === odd && rightAnswer === 'yes' || number === even && rightAnswer === 'no') {
//     result = 'bad'
// }
 

// export const evenOrOddNumber = () => {
//     if (randomNumber % 2 === 0) {
//         // console.log('число четное')
//         const evenNumber = randomNumber
//     } else {
//         // console.log('число нечетное')
//         const oddNumber = randomNumber
//     }
// }

// // console.log(randomNumber)
// // evenOrOddNumber()

// export let rigthOrWrongAnswer = (answer) => {
//     if (evenNumber === randomNumber) {
//         console.log('its evenNumber')
        
//     } else if (oddNumber === randomNumber) {
//         console.log('its oddNumber')
//     }
// }


import { QuestionEvenOrOddNumber } from '/root/Project-1/frontend-project-44/bin/src/index.js'
import { userName } from '/root/Project-1/frontend-project-44/bin/src/cli.js'

console.log("Welcome to the Brain Games!")

console.log('Hello' + ', ' + userName() + '!')

console.log('Answer "yes" if the number is even, otherwise answer "no".')

console.log(QuestionEvenOrOddNumber())