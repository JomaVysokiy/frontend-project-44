import readlineSync from 'readline-sync'

export const QuestionEvenOrOddNumber = () => {
    const number = Math.ceil(Math.random() * 100)
    const question = readlineSync.question('Question: ' + number + ' ');
    return question 
}

// возваращается вывод return 