const readline = require('readline-sync')

function type1(a, b, c, types) {
    if(a >= (b + c)) {
        console.log("NÃO FORMA TRIÂNGULO")
    } else if(a ** 2 === b ** 2 + c ** 2){
        console.log("TRIÂNGULO RETÂNGULO")
        types(a, b, c)
    } else if(a ** 2 > b ** 2 + c ** 2) {
        console.log("TRINÂNGULO OBTUSÂNGULO")
        types(a, b, c)
    } else if(a ** 2 < b ** 2 + c ** 2) {
        console.log("TRIÂNGULO ACUTÂNGULO")
        types(a, b, c)
    }
}

function type2(a, b, c) {
    if(a === b && a === c) {
        console.log("TRIÂNGULO EQUILÁTERO")
    } else if((a === b && a !== c) || (a === c && a !== b) || (c === b && c !== a)) {
        console.log("TRIÂNGULO ISÓSCELES")
    }
}

let values = []

for(let i = 1; i <= 3; i++) {
    values.push(Number.parseFloat(readline.question(`Informe o ${i}° valor: `)))
}

values.sort((a, b) => b - a)

let [a, b, c] = values

if(a < b || a < c) {
    console.log(`O valor A precisa ser maior o maior de todos`)
} else {
    type1(a, b, c, type2)
}