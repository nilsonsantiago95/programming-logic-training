const readline = require('readline-sync')

const sphereVolume = radius => {
    let pi = 3.14159
    return ((4/3) * pi * (radius ** 3)).toFixed(3)
}

let sphereRadius = Number.parseFloat(readline.question("Informe o raio da esfera: "))

console.log(`VOLUME = ${sphereVolume(sphereRadius)}`)