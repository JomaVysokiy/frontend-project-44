#!/usr/bin/env node
import game from '../index.js'
// const game = () => {
//     console.log('Welcome to the Brain Games!')
//     const userName = readlineSync.question('May I have your name? ')
//     console.log(`Hello, ${userName}!`)
//     console.log('What number is missing in the progression?')
  
//     for (let i = 0; i < 3; i += 1) {
        
//         const num1 = Math.ceil(Math.random() * 100)
//         const num2 = Math.ceil(Math.random() * 100)

//         const progression = [num1] 
//         for (let i = 0;i < 10; i++) {
//             progression.push(progression[i] + num2)
//         }
      
//         const randomIndex = Math.ceil(Math.random() * 10)
//         const correctAnswer = `${progression[randomIndex]}`
//         progression[randomIndex] = '..'
//         const question = `${progression}`
        
//         console.log(`Question: ${question}`);
//         const yourAnswer = readlineSync.question('Your answer: ')
  
//         if (yourAnswer === correctAnswer) {
//             console.log('Correct!');
//         } else {
//             console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
//             console.log(`Let's try again, ${userName}!`);
//             return
//         }
//     }
//     console.log(`Congratulations, ${userName}!`)
// }

const description = 'What number is missing in the progression?'

const progressionGame = () => {
    const runGame = () => {

        const num1 = Math.ceil(Math.random() * 100)
        const num2 = Math.ceil(Math.random() * 100)

        const progression = [num1] 
        for (let i = 0;i < 10; i++) {
            progression.push(progression[i] + num2)
        }
      
        const randomIndex = Math.ceil(Math.random() * 10)
        const correctAnswer = `${progression[randomIndex]}`
        progression[randomIndex] = '..'
        const question = `${progression}`
        
        return [question,correctAnswer]
    }
    game(description,runGame)
}

export default progressionGame