const readline = require('readline-sync')

class Cities {
    constructor(ddd, destination) {
        this.ddd = ddd
        this.destination = destination
    }
}

let infos = [
    new Cities(61, 'Brasília'),
    new Cities(71, 'Salvador'),
    new Cities(11, 'São Paulo'),
    new Cities(21, 'Rio de Janeiro'),
    new Cities(32, 'Juiz de Fora'),
    new Cities(19, 'Campinas'),
    new Cities(27, 'Vitória'),
    new Cities(31, 'Belo Horizonte')
]

let myDdd = Number.parseInt(readline.question("Informe um DDD: "))

let result = infos.find(city => {
    return city.ddd === myDdd
})

console.log(result === undefined ? 'DDD não cadastrado' : result.destination)