const readline = require('readline-sync')

function withdrawMoney(value) {
    const banknotes = [100, 50, 20, 10, 5, 2, 1]
    
    let leftover = 0
    let quantityBanknote = 0

    const myBanknotes = banknotes.map((banknote) => {
        if(banknote === 100) {
            quantityBanknote = Number.parseInt(value / banknote)
            leftover = value % banknote
            return quantityBanknote
        } else {
            quantityBanknote = Number.parseInt(leftover / banknote)
            leftover = leftover % banknote
            return quantityBanknote
        }
    })
    
    let count = 0
    let showBanknotes = ""
    myBanknotes.forEach((banknote) => {
        showBanknotes += `${banknote} nota(s) de ${banknotes[count].toLocaleString('pt-br', {style: "currency", currency: "BRL"})}\n`
        count++
    })
    
    return showBanknotes
}

try {
    let value = Number.parseInt(readline.question("Informe um valor: "))
    if(value < 0 || value > 1000000) {
        throw new Error(`${value < 0 ? "Saldo insuficiente" : "Não é possível sacar valores maiores do que 1.000.000"}`)
    } else {
        console.log(withdrawMoney(value))
    }
} catch(error) {
    console.log(error.message)
}