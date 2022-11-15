const readline = require('readline-sync')

function calcAverage(gradesArray, weightsArray) {
    let resSum = gradesArray.reduce((acc = 0, grade, index) => acc += grade * weightsArray[index], 0)
    let sumWeights = weightsArray.reduce((acc = 0, weight) => acc += weight, 0)
    return resSum / sumWeights
}

function showSituation(average) {
    if(average >= 7.0) {
        return `Média: ${average.toFixed(1)}.\nAluno aprovado!`
    } else if(average < 5.0) {
        return `Média: ${average.toFixed(1)}.\nAluno Reprovado!`
    } else {
        console.log(`Média: ${average}`)
        console.log("Aluno em exame.")
        let newGrade = Number.parseFloat(readline.question("Informe a nota do exame: "))
        let result = (newGrade + average) / 2
        console.log(result)
        return `Nota do exame: ${newGrade.toFixed(1)}.\n${result>=5.0 ? "Aluno aprovado!":"Aluno Reprovado!"}.\nMédia final: ${result.toFixed(1)}`
    }
}

const weights = [2, 3, 4, 1]
const grades = []
for(let i=1; i <= 4; i++) {
    let grade = Number.parseFloat(readline.question(`Informe a ${i}° nota: `))
    grades.push(grade)
}

let average = calcAverage(grades, weights)
console.log(showSituation(average))