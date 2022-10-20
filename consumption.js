const readline = require("readline-sync")

const averageFuelConsumption = (km, fuel) => (km / fuel).toFixed(3)

let travelledDistance = Number.parseInt(readline.question("informe a distância total percorrida: "))
let spentFuel = Number.parseFloat(readline.question("informe a distância total percorrida: ")).toFixed(1)

console.log(`${averageFuelConsumption(travelledDistance, spentFuel)} km/l`)