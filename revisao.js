/**
 * REVISÃO DE JAVASCRIPT
 * Temas:
 * - Estruturas Condicionais
 * - Laços de Repetição
 * - Funções
 */

// ======================================================
// 1. ESTRUTURAS CONDICIONAIS
// ======================================================

/**
 * EXERCÍCIO 1:
 * Um sistema de delivery cobra taxa baseada no valor do pedido:
 * - Até R$ 20 → taxa de R$ 5
 * - De R$ 21 a R$ 50 → taxa de R$ 3
 * - Acima de R$ 50 → frete grátis
 */

function calcularFrete(valorPedido) {
  // TODO: implementar lógica condicional
}

// Teste
console.log("Frete:", calcularFrete(15));
console.log("Frete:", calcularFrete(30));
console.log("Frete:", calcularFrete(60));


/**
 * EXERCÍCIO 2:
 * Um aluno é aprovado se sua média for >= 7.
 * Se estiver entre 5 e 6.9 → recuperação.
 * Abaixo de 5 → reprovado.
 */

function verificarSituacao(media) {
  // TODO: implementar
}

// Teste
console.log("Situação:", verificarSituacao(8));
console.log("Situação:", verificarSituacao(6));
console.log("Situação:", verificarSituacao(4));


// ======================================================
// 2. LAÇOS DE REPETIÇÃO
// ======================================================

/**
 * EXERCÍCIO 3:
 * Exibir no console todos os números de 1 a 10 utilizando FOR
 */

  // TODO: implementar usando for


/**
 * EXERCÍCIO 4:
 * Simular um sistema que conta quantos produtos foram adicionados ao carrinho.
 * O sistema deve parar quando atingir 5 produtos.
 * Utilizar WHILE.
 */

  // TODO: implementar


/**
 * EXERCÍCIO 5:
 * Simular um sistema de login:
 * O usuário tem até 3 tentativas para acertar a senha.
 * Usar DO-WHILE.
 */

  let tentativas = 0;
  let senhaCorreta = "1234";
  let senhaDigitada;

  // TODO: implementar lógica


// ======================================================
// 3. FUNÇÕES
// ======================================================

/**
 * EXERCÍCIO 6:
 * Criar uma função que receba um array de preços e retorne
 * o valor total da compra.
 */

function calcularTotal(precos) {
  // TODO: implementar
}

// Teste
console.log("Total:", calcularTotal([10, 20, 30]));


/**
 * EXERCÍCIO 7:
 * Criar uma função que receba um nome e retorne uma saudação personalizada.
 */

  // TODO: implementar

console.log(nomeDaFuncao("Davi"));


/**
 * EXERCÍCIO 8:
 * Criar uma função que receba um número e retorne:
 * - "Par" se for par
 * - "Ímpar" se for ímpar
 */

  // TODO: implementar

console.log(nomeDaFuncao(10));
console.log(nomeDaFuncao(7));


// ======================================================
// DESAFIO FINAL
// ======================================================

/**
 * Um sistema de estacionamento cobra:
 * - R$ 5 por hora
 * - Se passar de 3 horas, aplica desconto de 10%
 *
 * Crie uma função que receba o número de horas e retorne o valor final.
 */


  // TODO: implementar


console.log("Valor estacionamento:", nomeDaFuncao(2));
console.log("Valor estacionamento:", nomeDaFuncao(4));

/**
 * Perguntas para reflexão:
 * 1. Quando usar if/else ao invés de switch?
 * 2. Qual a diferença prática entre while e do-while?
 * 3. Por que dividir código em funções melhora a manutenção?
 */
