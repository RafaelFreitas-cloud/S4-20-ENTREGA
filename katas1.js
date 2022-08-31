
function oneThroughTwenty() {
    let meuRetorno = [];
    for (let i = 1; i <= 20; i++) {
        meuRetorno.push(i)
    }
    return meuRetorno;

}
console.log(`Nº até 20: ${oneThroughTwenty()}`)

function evensThroughTwenty() {
    let meuRetorno = [];
    for (let i = 0; i <= 20; i=i+2) {
        if (i != 0){
        meuRetorno.push(i)
        }
    }
    return meuRetorno;

}
console.log(`Nº pares até 20: ${evensThroughTwenty()}`)

function oddThroughTwenty() {
    let meuRetorno = [];
    for (let i = 1; i <= 20; i=i+2) {
        meuRetorno.push(i)
    }
    return meuRetorno;

}
console.log(`Nº ímpares até 20: ${oddThroughTwenty()}`)

function multiplesOfFive() {
    let meuRetorno = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 5 == 0){
        meuRetorno.push(i)
        }
    }
    return meuRetorno;

}
console.log(`Nº multiplo de 5 até 100: ${multiplesOfFive()}`)


// function squareNumbers() {
//     let meuRetorno = [];
//     for (let i = 1; i <= 100; i++;) && (let n = 1, n <= 10; n++) {
//         if (i % (n*n) == 0){
//         meuRetorno.push(i)
//         }
//     }
//     return meuRetorno;

// }
// console.log(`Nº quadrados perfeitos até 100: ${squareNumbers()}`)


function countingBackwards() {
    let meuRetorno = [];
    for (let i = 20; i >= 1; i--) {
        meuRetorno.push(i)
    }
    return meuRetorno;

}
console.log(`Nº até 20 de trás pra frente: ${countingBackwards()}`)

function evenNumbersBackwards() {
    let meuRetorno = [];
    for (let i = 20; i >= 0; i=i-2) {
        if (i != 0){
        meuRetorno.push(i)
        }
    }
    return meuRetorno;

}
console.log(`Nº pares até 20 de trás pra frente: ${evenNumbersBackwards()}`)

function oddNumbersBackwards() {
    let meuRetorno = [];
    for (let i = 19; i >= 0; i=i-2) {
        meuRetorno.push(i)
    }
    return meuRetorno;

}
console.log(`Nº ímpares até 20 de trás pra frente: ${oddNumbersBackwards()}`)

function multiplesOfFiveBackwards() {
    let meuRetorno = [];
    for (let i = 100; i >= 1; i--) {
        if (i % 5 == 0){
        meuRetorno.push(i)
        }
    }
    return meuRetorno;

}
console.log(`Nº multiplo de 5 até 100 de trás pra frente: ${multiplesOfFiveBackwards()}`)


// function squareNumbers() {
//     let meuRetorno = [];
//     for (let i = 1; i <= 100; i++) {
//         if (i * i <= 100){
//         meuRetorno.push(i)
//         }
//     }
//     return meuRetorno;

// }
// console.log(`Nº quadrados perfeitos até 100 de trás pra frente: ${squareNumbers()}`)
