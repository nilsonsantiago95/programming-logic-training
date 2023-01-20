const readline = require('readline-sync')

let type1 = {
    vertebrado: {
        ave: {carnivoro: 'Águia', onivoro: 'Pomba'},
        mamifero: {onivoro: 'Homem', herbivoro: 'Vaca'}
    }
}

let type2 = {
    invertebrado: {
        inseto: {hematofago: 'Pulga', herbivoro: 'Lagarta'},
        anelidio: {hematofago: 'Sanguessuga', onivoro: 'Minhoca'}
    }
}

let types = [type1, type2]

let type1Chosen = readline.question('Escolha vertebrado ou invertebrado: ').toLowerCase()
let type2Chosen = readline.question('Escolha ave, mamifero, inseto, anelidio, : ').toLowerCase()
let type3Chosen = readline.question('Escolha carnivoro, onivoro, herbivoro, hematofago: ').toLowerCase()

let result = types.find((type) => {
    return type[type1Chosen]
})

if(typeof result !== 'undefined') {
    try {
        for(let res in result) {
            console.log(result[res][type2Chosen][type3Chosen])
        }      
    } catch(error) {
        console.log(`${error.message}\nInforme apenas as informações pedidas`)
    }
} else {
    console.log(`Informe apenas as informações pedidas`)
}