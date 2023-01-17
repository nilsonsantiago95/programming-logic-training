const readline  = require('readline-sync')

const formatCurreny = (value) => value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
const calculateNewSalary = (salary, percentual) => {
    let readjustment = salary * (percentual / 100)
    let newSalary = salary + readjustment

    return {readjustment, percentual, newSalary}
}

let employeeSalary = Number.parseFloat(readline.question('Informe o salário atual do funcionário: R$'))
let result = {}

if(employeeSalary <= 400.00) {
    result = calculateNewSalary(employeeSalary, 15)
} else if(employeeSalary <= 800.00) {
    result = calculateNewSalary(employeeSalary, 12)
} else if(employeeSalary <= 1200.00) {
    result = calculateNewSalary(employeeSalary, 10)
}else if(employeeSalary <= 2000.00) {
    result = calculateNewSalary(employeeSalary, 7)
} else {
    result = calculateNewSalary(employeeSalary, 4)
}

let {readjustment, percentual, newSalary} = result

console.log(`Novo salário: ${formatCurreny(newSalary)}\nReajuste ganho: ${formatCurreny(readjustment)}\nEm percentual: ${percentual}%`)