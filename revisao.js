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


let valorPedido = 28
let mensagem = ''

if (valorPedido <= 20){
  mensagem = `Frete: R$ 5,00 | Total: R$${valorPedido + 5}`
}else if (valorPedido <= 50){
  mensagem = `Frete: R$ 3,00 | Total: R$${valorPedido + 3}`
}else{
  mensagem = `Frete Grátis | Total: R$${valorPedido}`
}

console.log(mensagem)


//Criando a função
function calcularFrete(valorPedido){
  let mensagem = ''

  if (valorPedido <= 20){
  mensagem = `Frete: R$ 5,00 | Total: R$${valorPedido + 5}`
  }else if (valorPedido <= 50){
    mensagem = `Frete: R$ 3,00 | Total: R$${valorPedido + 3}`
  }else{
    mensagem = `Frete Grátis | Total: R$${valorPedido}`
  }

  return mensagem

}

//Invocando a função
//1º Alternativa
console.log(calcularFrete(37))

//2º Alternativa
const resultado = calcularFrete(10)

console.log(resultado)

/**
 * EXERCÍCIO 2:
 * Um aluno é aprovado se sua média for >= 7.
 * Se estiver entre 5 e 6.9 → recuperação.
 * Abaixo de 5 → reprovado.
 */

function verificarSituacao(media) {
  if (media >= 7){
    return 'Aprovado!'
  }else if (media >= 5){
    return 'Recuperação!'
  }else {
    return 'Reprovado!'
  }
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

  for(let i = 1; i <= 10; i++){
    console.log(i)
  }


/**
 * EXERCÍCIO 4:
 * Simular um sistema que conta quantos produtos foram adicionados ao carrinho.
 * O sistema deve parar quando atingir 5 produtos.
 * Utilizar WHILE.
 */

  let cont = 0

  while(cont !== 5){
    console.log('Adicionando Produto...')

    cont++
  }

/**
 * EXERCÍCIO 5:
 * Simular um sistema de login:
 * O usuário tem até 3 tentativas para acertar a senha.
 * Usar DO-WHILE.
 */

  const prompt = require('prompt-sync')()

  let tentativas = 0;
  let senhaCorreta = "1234";
  let senhaDigitada;

  do{
    senhaDigitada = prompt('Digite sua senha: ')

    if (senhaDigitada === senhaCorreta){
      console.log('Acesso Liberado!')
      break
    }

    tentativas++

  }while(tentativas !== 3)


// ======================================================
// 3. FUNÇÕES
// ======================================================

/**
 * EXERCÍCIO 6:
 * Criar uma função que receba um array de preços e retorne
 * o valor total da compra.
 */

let nomes = ['Davi', 'Ana', 'John', 'Alex']

nomes[0]

function calcularTotal(precos) {
  let soma = 0
  
  //percorrendo todos os itens do array e somando cada elemento a soma
  for(let i = 0; i < precos.length; i++){
    console.log(`${i+1}º Laço de Repetição`)
    console.log('Valor da variável antes da soma', soma)
    soma += precos[i] // soma = soma + precos[i]
    console.log('Valor da variável depois da soma', soma)
  }

  return soma
}

// Teste
//console.log("Total: R$", calcularTotal([10, 20, 30]));
console.log(`Total: R$${calcularTotal([50, 30, 20])}`)
console.log(`Total: R$${calcularTotal([50, 30, 20, 50, 20])}`)


/**
 * EXERCÍCIO 7:
 * Criar uma função que receba um nome e retorne uma saudação personalizada.
 */

function saudacao(nome){
  return `Olá, ${nome}!`
}

console.log(saudacao("Davi"));
console.log(saudacao("Ana"));


/**
 * EXERCÍCIO 8:
 * Criar uma função que receba um número e retorne:
 * - "Par" se for par
 * - "Ímpar" se for ímpar
 */

function parOuImpar(valor){

  if (valor % 2 == 0){
    return 'PAR!'
  }

  return 'ÍMPAR!'
}

console.log(parOuImpar(10));
console.log(parOuImpar(7));


// ======================================================
// DESAFIO FINAL
// ======================================================

/**
 * Um sistema de estacionamento  R$ cobra:
 * - R$ 5 por hora
 * - Se passar de 3 horas, aplica desconto de 10%
 *
 * Crie uma função que receba o número de horas e retorne o valor final.
 */


function calcularEstacionamento(horas){
  let total = horas * 5

  if (horas > 3){
    return total * 0.9
  }

  return total
}


console.log("Valor estacionamento: R$ ", calcularEstacionamento(2));
console.log("Valor estacionamento: R$ ", calcularEstacionamento(4));

/**
 * Perguntas para reflexão:
 * 1. Quando usar if/else ao invés de switch?
 * 2. Qual a diferença prática entre while e do-while?
 * 3. Por que dividir código em funções melhora a manutenção?
 */
