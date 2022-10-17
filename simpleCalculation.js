const readline = require('readline-sync')

class Ask {
    constructor(code = 0, quantity = 0, valueByUnity = 0) {
        code = this.code
        quantity = this.quantity
        valueByUnity = this.valueByUnity
    }

    informations() {
        this.code = Number.parseInt(readline.question("Informe o código da peça: "))
        this.quantity = Number.parseInt(readline.question("Informe a quantidade: "))
        this.valueByUnity = Number.parseFloat(readline.question("Informe o valor por unidade: "))
    }
}

const valueToPay = (ask1, ask2) => {
   let valueAsk1 = ask1.valueByUnity * ask1.quantity
   let valueAsk2 = ask2.valueByUnity * ask2.quantity

   return (valueAsk1 + valueAsk2).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
}

let ask1 = new Ask()
let ask2 = new Ask()

console.log("Peça 1")
ask1.informations()

console.log("Peça 2")
ask2.informations()

console.log(`Valor a pagar: ${valueToPay(ask1, ask2)}`)