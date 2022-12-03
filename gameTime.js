const readline = require('readline-sync')

let initialHour = Number.parseInt(readline.question("Informe a hora inicial do jogo: "))
let finalHour = Number.parseInt(readline.question("Informe a hora final do jogo: "))

let gameTime = 0

if(initialHour > finalHour) {
    gameTime = 24 - (initialHour - finalHour)
} else if(initialHour < finalHour) {
    gameTime = finalHour - initialHour
} else {
    gameTime = 24
}

console.log(`O jogo durou ${gameTime} hora (s)`)