import readlineSync from 'readline-sync'

export const QuestionEvenOrOddNumber = () => {
const number = Math.ceil(Math.random() * 100)

let answer = ''

if (number % 2 === 0 && answer === 'yes') {
  const game = readlineSync.question('Question: ' + number + ' ') 
  answer = 'good'
  console.log(game)
  console.log('Your answer: ' + number)
  return answer 
} else {
  const game = readlineSync.question('Question: ' + number + ' ')
  answer = 'bad'
  console.log(game)
  console.log('Your answer: ' + number)
  return answer 
}
}


// export const QuestionEvenOrOddNumber = () => {
//   const number = Math.ceil(Math.random() * 100)
//     if (readlineSync.keyInYN('Question: ' + number + ' ') && number % 2 === 0) {
//   // 'Y' key was pressed.
//     console.log('good');
// } else {
//     console.log('bad');
//   }
// }
 // если число четное и мы нажали да или число нечетное и мы нажали нет,то good 
// если число нечетное и мы нажали да или число четное и мы нажали нет,то bad

// подходит ли нам вообще именно этот метод?

// export const game = () => {
//   const rounds = 3
//   const number = Math.ceil(Math.random() * 100)
//   for (const round of rounds) {
//   const answer = {goodAnswer, badAnswer}
//   if () {

//   }
// }
// }


