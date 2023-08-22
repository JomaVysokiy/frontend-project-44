import readlineSync from 'readline-sync';

const game = (descriptionOfExercise,game) => {
    // приветствие
    console.log('Welcome to the Brain Games!')
    const userName = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${userName}!`)
    // описание задания 
    console.log(descriptionOfExercise)
    // цикл
    for (let i = 0 ; i < 3 ; i++) {
        // правильно ли здесь выполнена деструктуризация?
        // здесь мы создаем переменные которые мы создавали
        // в играх
        // нужны ли здесь скобки у game()? Как это работает и 
        // как будет(или не будет) работать без них?
        const [correctAnswer, question] = game()
        console.log('Question: ' + question)
        const yourAnswer = readlineSync.question('Your answer: ')
    
        if (answer !== correctAnswer) {
          console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
          console.log(`Let's try again, ${userName}!`)
          return
        } else {
          console.log('Correct!')         
        }    
    }
    console.log(`Congratulations, ${userName}!`)
}

export default game