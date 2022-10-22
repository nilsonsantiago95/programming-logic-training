const readline = require('readline-sync')

const amountOfFuelNeeded = (timeTravel, velocity) => (timeTravel / 12) * velocity

let time = Number.parseInt(readline.question("Tempo gasto de viagem: "))
let averageVelocity = Number.parseInt(readline.question("Velocidade média: "))

console.log(amountOfFuelNeeded(time, averageVelocity).toFixed(3))