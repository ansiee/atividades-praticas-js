/*4. Crie uma função que tenha um número como parâmetro, se o número for
par retorne verdadeiro, se não, retorne falso. */

const numero = prompt('Digite um número:');

function parImpar(numero){
    if (numero %2 == 0){
        document.getElementById('info').innerHTML = `O número ${numero} é verdadeiro!`
    }

    else{
        document.getElementById('info').innerHTML = `O número ${numero} é falso!`
}
}
parImpar(numero)