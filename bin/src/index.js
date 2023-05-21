import readlineSync from 'readline-sync'

export const QuestionEvenOrOddNumber = () => {
const number = Math.ceil(Math.random() * 100)

const goodOrBadAnswer = ['good','bad']

const game = readlineSync.question('Question: ' + number + ' ') 

let arr = game.split(' ')
const answer = arr[arr.length - 1]

if (number % 2 === 0 && answer === 'yes' || number % 2 !== 0 && answer === 'no') {
  console.log('Your answer: ' + number)
  return goodOrBadAnswer[0]  
} else {
  console.log('Your answer: ' + number)
  return goodOrBadAnswer[1] 
}
}

// export const game = () => {
//   const rounds = 3
//   const number = Math.ceil(Math.random() * 100)
//   for (const round of rounds) {
//   const answer = {goodAnswer, badAnswer}
//   if () {

//   }
// }
// }
