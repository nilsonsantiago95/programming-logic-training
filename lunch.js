const readline = require("readline-sync")

class Item {
    constructor(code, name, price) {
        this.code = code
        this.name = name
        this.price = price
    }

    static addItem(item) {
        items.push(item)
    }
}

let items = []

let item1 = new Item(1, "Cachorro Quente", 4.00)
Item.addItem(item1)

let item2 = new Item(2, "X-Salada", 4.50)
Item.addItem(item2)

let item3 = new Item(3, "X-Bacon", 5.00)
Item.addItem(item3)

let item4 = new Item(4, "Torrada simples", 2.00)
Item.addItem(item4)

let item5 = new Item(5, "Refrigerante", 1.50)
Item.addItem(item5)

console.table(items)

let myCode = Number.parseInt(readline.question("Informe o código do item: "))
let quantity = Number.parseInt(readline.question("Informe a quantidade: "))

let product = items.find(item => myCode === item.code)
let payment = (product.price  * quantity).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

console.log(`${quantity} ${product.name}\nTotal: ${payment}`)