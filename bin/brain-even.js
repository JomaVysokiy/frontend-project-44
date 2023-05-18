#!/usr/bin/env node

import { QuestionEvenOrOddNumber } from '/root/Project-1/frontend-project-44/bin/src/index.js'
import { userName } from '/root/Project-1/frontend-project-44/bin/src/cli.js'

console.log("Welcome to the Brain Games!")

console.log('Hello' + ', ' + userName() + '!')

console.log('Answer "yes" if the number is even, otherwise answer "no".')

// console.log('Your answer: ' + QuestionEvenOrOddNumber())

console.log(QuestionEvenOrOddNumber())