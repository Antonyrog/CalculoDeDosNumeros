const btnS = document.getElementById('sumar');
const btnR = document.getElementById('restar');
const btnM = document.getElementById('multiplicar');
const btnD = document.getElementById('dividir');
const rpta = document.getElementById('resultado');

btnS.addEventListener('click', sumar);

function sumar()
{
    const num1= parseFloat(document.getElementById('num1').value);
    const num2= parseFloat(document.getElementById('num2').value);
    const s = num1 + num2;
    rpta.innerHTML = `La suma de ${num1} mas ${num2} es: ${s} `;
}

btnR.addEventListener('click',restar);

function restar()
{
    const num1= parseFloat(document.getElementById('num1').value);
    const num2= parseFloat(document.getElementById('num2').value);
    const r = num1 - num2;
    rpta.innerHTML = `La resta de ${num1} menos ${num2} es: ${r}`;
}

btnM.addEventListener('click',multiplicar);

function multiplicar()
{
    const num1= parseFloat(document.getElementById('num1').value);
    const num2= parseFloat(document.getElementById('num2').value);
    const m = num1 * num2;
    rpta.innerHTML = `La multiplicacion de ${num1} por ${num2} es: ${m}`;
}

btnD.addEventListener('click',dividir);

function dividir()
{
    const num1= parseFloat(document.getElementById('num1').value);
    const num2= parseFloat(document.getElementById('num2').value);
    const d = num1 / num2;
    rpta.innerHTML = `La divicion de ${num1} entre ${num2} es: ${d}`;
}