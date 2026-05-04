/*
========================================
GABARITO COMENTADO - LAÇOS DE REPETIÇÃO
========================================
*/

// =============================
// EXERCÍCIO 1 - FOR
// =============================
console.log("Exercício 1");

/*
Utilizamos o FOR porque sabemos exatamente
quantas repetições serão necessárias (30).
*/
for (let i = 1; i <= 30; i++) {
    console.log(i);
}


// =============================
// EXERCÍCIO 2 - FOR
// =============================
console.log("\nExercício 2");

const produtos = [10.50, 25.00, 7.30, 12.00, 5.20];

/*
Percorremos o array somando os valores.
O FOR é ideal pois temos acesso ao índice.
*/
let total = 0;

for (let i = 0; i < produtos.length; i++) {
    total += produtos[i];
}

console.log("Total da compra: R$", total.toFixed(2));


// =============================
// EXERCÍCIO 3 - WHILE
// =============================
console.log("\nExercício 3");

let saldo = 1000;

/*
WHILE é usado quando não sabemos exatamente
quantas repetições ocorrerão, pois depende do saldo.
*/
while (saldo >= 150) {
    saldo -= 150;
    console.log("Saque realizado. Saldo restante: R$", saldo);
}


// =============================
// EXERCÍCIO 4 - WHILE
// =============================
console.log("\nExercício 4");

let distancia = 0;

/*
Loop continua até atingir a meta de 10km.
*/
while (distancia < 10) {
    distancia += 2;
    console.log("Distância percorrida:", distancia, "km");
}


// =============================
// EXERCÍCIO 5 - DO...WHILE
// =============================
console.log("\nExercício 5");

let senhaCorreta = "1234";
let tentativa = "0000";

/*
DO...WHILE garante pelo menos uma execução,
ideal para cenários de validação (ex: login).
*/
do {
    console.log("Tentando acessar...");
    
    // Simulação: alterando tentativa para correta
    tentativa = "1234";

} while (tentativa !== senhaCorreta);

console.log("Acesso permitido!");


// =============================
// EXERCÍCIO 6 - DO...WHILE
// =============================
console.log("\nExercício 6");

let continuar = false;

/*
Mesmo com 'continuar = false', o bloco executa uma vez.
*/
do {
    console.log("Jogando...");
    
    // Simulação de saída
    continuar = false;

} while (continuar === true);

console.log("Jogo encerrado.");


// =============================
// EXERCÍCIO DESAFIO
// =============================
console.log("\nDesafio");

const itens = new Array(15).fill(1);

/*
Regra:
- R$2 de desconto por item
- Máximo de R$20

Calculamos o desconto acumulando no FOR
e limitamos com uma condição.
*/
let desconto = 0;

for (let i = 0; i < itens.length; i++) {
    desconto += 2;

    // Limite máximo
    if (desconto >= 20) {
        desconto = 20;
        break; // interrompe o loop ao atingir o limite
    }
}

console.log("Desconto total: R$", desconto);