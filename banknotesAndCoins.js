const readline = require('readline-sync')

let value = Number.parseFloat(readline.question("Informe um valor: R$ ")).toFixed(2)

let valuesToWithdraw = [100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10 , 0.05, 0.01]
let conversion = number => number.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

if(value < 0 || value > 1000000.00) {
    console.log("Valor inválido!")
} else {
    let rest = 0
    let res = 0
    let valuesReceived = valuesToWithdraw.map((money, index) => {
        if(index === 0) {
            res = value / money
            rest = value % money
            return Number.parseInt(res)
        } else {
            res = rest / money
            rest = rest % money
            return Number.parseInt(res)
        }
    })

    valuesReceived.forEach((money, index) => {
        console.log(`${money} ${valuesToWithdraw[index]>1 ? "notas(s)":"moeda(s)"} de ${conversion(valuesToWithdraw[index])}`)
    })
}