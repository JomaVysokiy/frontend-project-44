#!/usr/bin/env node
import game from '../index.js'

const description = 'What number is missing in the progression?'

const progressionGame = () => {
    const runGame = () => {

        const num1 = Math.ceil(Math.random() * 100)
        const num2 = Math.ceil(Math.random() * 100)

        const progression = [num1] 
        for (let i = 0;i <= 8; i++) {
            progression.push(progression[i] + num2)
        }
      
        const randomIndex = Math.ceil(Math.random() * 10)
        const correctAnswer = `${progression[randomIndex]}`
        progression[randomIndex] = '..'
        const question = `${progression.join(' ')}`
        
        return [question,correctAnswer]
    }
    game(description,runGame)
}

export default progressionGame