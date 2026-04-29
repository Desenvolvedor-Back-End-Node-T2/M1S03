/*
========================================
LISTA DE EXERCÍCIOS - LAÇOS DE REPETIÇÃO
Contexto: Situações do dia a dia
========================================
*/

// =============================
// EXERCÍCIO 1 - FOR
// =============================
/*
Uma escola deseja listar todos os números de chamada dos alunos de uma turma.
Sabendo que a turma possui 30 alunos, exiba no console os números de 1 a 30.
*/

console.log("Exercício 1");
// Seu código aqui


// =============================
// EXERCÍCIO 2 - FOR
// =============================
/*
Um sistema de vendas precisa calcular o valor total de 5 produtos.
Considere que os valores estão armazenados em um array.
Exiba o valor total da compra.
*/

console.log("\nExercício 2");

const produtos = [10.50, 25.00, 7.30, 12.00, 5.20];

// Seu código aqui


// =============================
// EXERCÍCIO 3 - WHILE
// =============================
/*
Um caixa eletrônico permite saques até que o saldo acabe.
Dado um saldo inicial de R$ 1000, simule saques de R$ 150 enquanto houver saldo suficiente.
Exiba o saldo restante a cada saque.
*/

console.log("\nExercício 3");

let saldo = 1000;

// Seu código aqui


// =============================
// EXERCÍCIO 4 - WHILE
// =============================
/*
Um aplicativo de corrida registra a distância percorrida até atingir a meta de 10km.
Simule incrementos de 2km por execução e exiba o progresso até atingir ou ultrapassar a meta.
*/

console.log("\nExercício 4");

let distancia = 0;

// Seu código aqui


// =============================
// EXERCÍCIO 5 - DO...WHILE
// =============================
/*
Um sistema pede senha ao usuário até que a senha correta seja digitada.
Considere que a senha correta é "1234".
Simule tentativas usando uma variável e execute pelo menos uma vez.
*/

console.log("\nExercício 5");

let senhaCorreta = "1234";
let tentativa = "0000"; // Simule diferentes valores

// Seu código aqui


// =============================
// EXERCÍCIO 6 - DO...WHILE
// =============================
/*
Um jogo solicita ao jogador que continue jogando até decidir sair.
Simule a execução do jogo exibindo "Jogando..." pelo menos uma vez
e utilize uma variável para controlar a decisão de saída.
*/

console.log("\nExercício 6");

let continuar = false; // altere para simular comportamento

// Seu código aqui


// =============================
// EXERCÍCIO DESAFIO
// =============================
/*
Uma loja deseja aplicar desconto progressivo:
- Para cada item comprado, o cliente ganha R$ 2 de desconto
- Limite máximo de desconto: R$ 20

Dado um array com 15 itens, calcule o desconto total usando FOR.
*/

console.log("\nDesafio");

const itens = new Array(15).fill(1);

// Seu código aqui