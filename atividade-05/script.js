/*5. Faça uma função que tenha dois valores como parâmetros e retorne
verdadeiro se forem iguais e do mesmo tipo. */

const valor1 = prompt('Digite o primeiro valor:')
const valor2 = prompt('Digite o segundo valor:')

function doisValores(valor01, valor02){
    if (valor01 === valor02){
        document.getElementById('info').innerHTML = `O número é verdadeiro!`

        return true
    } 
    else{
        document.getElementById('info').innerHTML = `O número é falso!`

        return false
    }
    
}
doisValores(valor1, valor2)