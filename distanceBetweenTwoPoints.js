const readline = require("readline-sync")

class Plan {
    constructor(x=0, y=0) {
        this.x = x
        this.y = y
    }

    set axeX(x) {
       this.x = x
    }

    set axeY(y) {
        this.y = y
    }
}

const axeX = () => Number.parseFloat(readline.question("Informe o valor do eixo X: "))
const axeY = () => Number.parseFloat(readline.question("Informe o valor do eixo Y: "))
const distance = (p1, p2) => Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2).toFixed(4)

let p1 = new Plan()
let p2 = new Plan()

console.log("===== Plano 1 =====")
p1.axeX = axeX()
p1.axeY = axeY()

console.log("===== Plano 2 =====")
p2.axeX = axeX()
p2.axeY = axeY()

console.log(distance(p1, p2))