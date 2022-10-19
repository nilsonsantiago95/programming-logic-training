const readline = require('readline-sync')

const rightTriangleArea = (base, height) =>  console.log(`TRIÂNGULO: ${((a * c) / 2).toFixed(3)}`)
const circleArea = (radius) => {
    const pi = 3.14159
    let area = (pi * (radius ** 2)).toFixed(3)
    console.log(`CÍRCULO: ${area}`)
}
const trapezeArea = (base1, base2, height) => {
    let area = ((base1 + base2) * height) / 2
    console.log(`TRAPÉZIO ${area.toFixed(3)}`)
}
const squareArea = b => console.log(`QUADRADO: ${(b * b).toFixed(3)}`)
const areaRectangle = (a, b) => console.log(`RETÂNGULO: ${(a * b).toFixed(3)}`)

let values = []
for(let c=1; c <= 3; c++) {
    values.push(Number.parseFloat(readline.question(`Informe o ${c}° Valor: `)))
}
let [a, b, c] = values

rightTriangleArea(a, c)
circleArea(c)
trapezeArea(a, b, c)
squareArea(b)
areaRectangle(a, b)