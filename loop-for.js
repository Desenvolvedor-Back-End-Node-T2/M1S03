
/*

    for(inicialização ; condição ; incremento/decremento){
        //bloco de código
    }

*/

// Exibir em ordem crescente do 0 ao 9
for(let i = 0; i <= 9; i++){
    console.log(i)
}

// Exibir em ordem decrescente de 9 a 0
for(let i = 9; i >= 0; i--){
    console.log(i)
}

console.log('#-------------------------------------#')

// Exibir de 0 a 10 de 2 em 2
// i += 2 ~ i = i + 2
for(let i = 0; i <= 10; i += 2){
    console.log(i)

    if(i === 8){
        continue //salta para o próximo processo de repetição (loop)
    }

    console.log('For')
}

for(let i = 0; i <= 10; i += 2){
    console.log(i)

    if(i === 8){
        break //encerra todo o processo de repetição
    }

    console.log('For')
}

