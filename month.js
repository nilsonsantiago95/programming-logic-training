const readline = require('readline-sync')

let numberMonth = Number.parseInt(readline.question('Informe um número correspondente a um mês: '))

let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

console.log(months[numberMonth - 1])