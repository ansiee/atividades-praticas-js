/*6. Crie uma função que tenha um número como parâmetro e depois
arredonde o número para o segundo dígito após a vírgula e retorne o número arredondado */

const numero = parseFloat(prompt('Digite um numero:'));

function numeroDigitado(number){
    return number.toFixed(2);
}
document.getElementById('info').innerHTML = `Seu novo número: ${numeroDigitado(numero)}`;