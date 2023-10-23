
let n1, n2;

function isPair(){
    if((n1 + n2) % 2 == 0)
        alert(`A soma dos números é par!`);
    else
        alert(`A soma dos números é ímpar!`);
}

function areNumbersEqual(num1, num2){
    if(num1 === num2)
        alert("Legal, os números são iguais!");
    else
        alert("Os números são diferentes!");
}

n1 = Number(prompt(`Olá! Eu sou o Operador de Números. \nDigite o primeiro número`));

n2 = Number(prompt(`Digite o segundo numero:`));

alert(`A soma dos números é: ${(n1 + n2)}`);
alert(`A subtração dos números é: ${(n1 - n2)}`);
alert(`A multiplicação dos números é:  ${(n1 * n2)}`);
alert(`A divisão dos números é:  ${(n1 / n2).toFixed(2)}`);
alert(`O resto da divisão dos números é:  ${(n1 % n2)}`);

isPair();
areNumbersEqual(n1, n2);