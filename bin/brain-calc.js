#!/usr/bin/env node
import readlineSync from 'readline-sync'
const game = () => { 
console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)
console.log('What is the result of the expression?')

for (let i = 0; i < 3; i++) {
    const num1 = Math.ceil(Math.random() * 100)
    const num2 = Math.ceil(Math.random() * 100)
    const operations = ['+','-','*']
    const randomOperation = operations[Math.floor(Math.random()*operations.length)]
    const expression = `${num1} ${randomOperation} ${num2}`
    console.log(`Question: ${expression}`)

    let correctAnswer = 0
    if (randomOperation === '+') {
        const result =  num1 + num2
        correctAnswer = `${result}`
    }  
    if (randomOperation === '-') {
        const result =  num1 - num2
        correctAnswer = `${result}`
    } 
    if (randomOperation === '*') {
        const result =  num1 * num2
        correctAnswer = `${result}`
    }

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