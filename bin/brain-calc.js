#!/usr/bin/env node
import readlineSync from 'readline-sync'
const game = () => { 
console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)
console.log('What is the result of the expression?')

for (let i = 0; i < 3; i++) {
    // посмотреть как будут работать константы
    const number1 = Math.ceil(Math.random() * 100)
    const number2 = Math.ceil(Math.random() * 100)
    const operations = ['+','-','*']
    const randomOperation = operations[Math.floor(Math.random()*operations.length)]
    const expression = `${number1} ${randomOperation} ${number2}`
    console.log(`Question: ${expression}`)

    let correctAnswer = 0
    if (randomOperation === '+') {
        const result =  number1 + number2
        correctAnswer = `${result}`
    } else if (randomOperation === '-') {
        const result =  number1 - number2
        correctAnswer = `${result}`
    } else if (randomOperation === '*') {
        const result =  number1 * number2
        correctAnswer = `${result}`
    }

    console.log(`Подсказка: ${correctAnswer}`)
    const answer = readlineSync.question('Your answer: ')
    
    if (answer !== correctAnswer) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
        console.log(`Let's try again, ${name}!`)
        return
    } else {
        console.log('Correct!')
    }
}
    console.log(`Congratulations, ${name}!`)
}

game()