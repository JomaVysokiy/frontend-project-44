#!/usr/bin/env node
import game from '../index.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'
const isPrime = (num) => {
  if (num < 2) {
    return false
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

const primeGame = () => {
  const runGame = () => {
  
  const num = Math.ceil(Math.random() * 100)
  const question = `${num}`

  let correctAnswer = 'yes'
  if (isPrime(num) === false) {
    correctAnswer = 'no'
  }
    return [question,correctAnswer]
  }
  game(description,runGame)
}

export default primeGame
