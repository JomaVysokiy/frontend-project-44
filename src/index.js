import readlineSync from 'readline-sync';

const game = (description,runGame) => {
  // приветствие
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  // условие задания
  console.log(description)
  // цикл
  for (let i = 0 ; i < 3 ; i++) {
    // вопрос (question)
    const [question, correctAnswer] = runGame()
    console.log('Question: ' + question)
    // ответ
    const answer = readlineSync.question('Your answer: ')

    // условие 
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    } else {
      console.log('Correct!')
    }
  }
  console.log(`Congratulations, ${userName}!`)
}

export default game