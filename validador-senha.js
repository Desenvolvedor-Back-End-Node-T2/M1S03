/*
    LIVE CODING
    VALIDADOR DE SENHA
*/

function validarSenha(senha){
    if(typeof senha !== 'string'){
        return {
            ok: false,
            msg: 'Deve ser uma "string"' 
        }
    }

    const minLen = senha.length >= 8
    const maxLen = senha.length <= 64
    const temMaius = /[A-Z]/.test(senha)
    const temNum = /[0-9]/.test(senha)
    const temEsp = /[!@*%$]/.test(senha)
    const temMinus = /[a-z]/.test(senha)
    const temEspaco = !/\s/.test(senha)
    
    const ok = minLen && maxLen 
                && temEsp && temEspaco 
                && temMaius && temMinus
                && temNum
    
    return {
            ok: ok,
            msg: ok ? 'Senha Forte!' : 'Senha Fraca!' 
        }
}

console.log(validarSenha(null))
console.log(validarSenha('Davi'))
console.log(validarSenha('Davi123'))
console.log(validarSenha('Davi123@ola'))
console.log(validarSenha('Davi123@ola*'))