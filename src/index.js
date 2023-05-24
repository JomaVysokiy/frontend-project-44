import readlineSync from 'readline-sync'
import { userName } from '/root/Project-1/frontend-project-44/src/cli.js'

export const QuestionEvenOrOddNumber = () => {
const number = Math.ceil(Math.random() * 100)

const str = readlineSync.question('Question: ' + number + ' ') 

let arr = str.split(' ')
const answer = arr[arr.length - 1]

if (number % 2 === 0 && answer === 'yes' || number % 2 !== 0 && answer === 'no') {
  console.log('Your answer: ' + number)
  return ('Correct!')  
} else {
  console.log('Your answer: ' + number)
  return (`Let's try again, ${name}!`) 
}
}

// export const game = () => {
//   const rounds = 3
//   for (const round of rounds) {

//     if () {

//   }
// }
// }
