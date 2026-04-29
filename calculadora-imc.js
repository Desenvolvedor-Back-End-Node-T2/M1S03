/*
    LIVE CODING
    CALCULADORA IMC
*/

function calcIMC(peso, altura){
    let isPesoValid = peso > 0 && peso <= 300
    let isAlturaValid = altura > 0 && altura <= 3

    /*
    if(!isPesoValid){
        return {
            result: null,
            message: "Valores Inválidos! Insira valores corretos."
        }
    }

    if(!isAlturaValid){
        return {
            result: null,
            message: "Valores Inválidos! Insira valores corretos."
        }
    }
    */

    if (!(isPesoValid && isAlturaValid)){
        return {
            result: null,
            message: "Valores Inválidos! Insira valores corretos."
        }
    }

    //Lógica para a calculadora do IMC
    // toFixed() -> função para definir a quantidade de casas decimais
    const imc = (peso / (altura ** 2)).toFixed(2)
    let msg = ''

    if (imc >= 40){
        msg = 'Obesidade Grau III'
    }else if (imc >= 35){
        msg = 'Obesidade Grau II'
    }else if (imc >= 30){
        msg = 'Obesidade Grau I'
    }else if (imc >= 25){
        msg = 'Sobrepeso'
    }else if (imc >= 18.5){
        msg = 'Peso Normal'
    }else{
        msg = 'Abaixo do Peso'
    }

    return {
        result: imc,
        message: msg
    }  
}

console.log(calcIMC(-1, 2))
console.log(calcIMC(75, 1.80))