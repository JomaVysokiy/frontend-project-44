import readlineSync from 'readline-sync';

const game = (descriptionOfExercise,game) => {
    // приветствие
    console.log('Welcome to the Brain Games!')
    const name = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${name}!`)
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

export default game