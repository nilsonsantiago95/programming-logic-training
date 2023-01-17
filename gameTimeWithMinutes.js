const readline = require('readline-sync')

let initialHour = Number.parseInt(readline.question(`Informe a hora inicial do jogo: `))
let initialMinute = Number.parseInt(readline.question(`Informe o minuto inicial do jogo: `))

let finallyHour = Number.parseInt(readline.question(`Informe a hora final do jogo: `))
let finallyMinute = Number.parseInt(readline.question(`Informe o minuto inicial do jogo: `))

durationHour = finallyHour - initialHour
durationMinutes = finallyMinute - initialMinute

if(durationHour < 0) {
    durationHour += 24
}

if(durationMinutes < 0) {
    durationMinutes += 60
    durationHour--
}

if(durationHour === 0 && durationMinutes === 0) {
    console.log("O jogo durou 24 horas")
} else {
    console.log(`O jogo durou ${durationHour} hora (s) e ${durationMinutes} minuto (s)`)
}