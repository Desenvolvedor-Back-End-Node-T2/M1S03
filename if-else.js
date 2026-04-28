const nota = 0

if (nota >= 9){
    console.log("Excelente!")
}else if (nota >= 7){
    console.log("Aprovado!")
}else if (nota >= 5){
    console.log("Recuperação!")
}else{
    console.log("Reprovado!")
}

let token = 'dasfsadfsadfadsfa.fafsdfsadfasfsafs.fasdfsafasfsdf'

if (token){
    console.log('Tem um valor no token!')
}else{
    console.log(token)
}

let test = ' ' === '' //um espaço preenchido é um valor armazenado

console.log(test) 

let nome = '   Davi'
nome = nome.trim() //remove espaços em branco no começo e final da string

if (nome !== ''){
    console.log(`${nome}! Seja Bem Vindo de Volta!`)
}

// Switch - Case

const nivelAcesso = ''

switch (nivelAcesso){
    case 'USER':
        //lógica para o perfil
        console.log('Acessando rota do user...')
        break
    case 'ADMIN':
        //lógica para o perfil
        console.log('Acessando rota do admin...')
        break
    default:
        //lógica para o perfil desconhecido
        console.log('Acessando rota global...')
}

