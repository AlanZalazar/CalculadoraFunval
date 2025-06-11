import { sumar } from './sumar.js';
import { restar } from './restar.js';
import { multiplicar } from './multiplicar.js';
import { dividir } from './dividir.js';

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const resultadoSuma = document.getElementById('resultadoSuma');
const resultadoResta = document.getElementById('resultadoResta');
const resultadoMultiplicacion = document.getElementById('resultadoMultiplicacion');
const resultadoDivision = document.getElementById('resultadoDivision');
const resultadoDiv = document.getElementById('resultado');
const mensajeResultado = document.getElementById('mensajeResultado');

document.getElementById('btnCalcular').addEventListener('click', () => {
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);

    if (isNaN(a) || isNaN(b)) {
        mensajeResultado.textContent = 'Por favor, ingrese números válidos.';
        resultadoSuma.textContent = '';
        resultadoResta.textContent = '';
        resultadoMultiplicacion.textContent = '';
        resultadoDivision.textContent = '';
        resultadoDiv.classList.remove('hidden');
        return;
    }

    mensajeResultado.textContent = 'Resultados:';
    resultadoSuma.textContent = '';
    resultadoResta.textContent = '';
    resultadoMultiplicacion.textContent = '';
    resultadoDivision.textContent = '';
    resultadoDiv.classList.remove('hidden');

    if (a < 0 || b < 0) {
        resultadoSuma.textContent = 'Suma: Error - Deben ser números mayores a 0.';
    } else {
        resultadoSuma.textContent = `Suma: ${a} + ${b} = ${sumar(a, b)}`;
    }

    const resta = restar(a, b);
    resultadoResta.textContent = resta;

    const multiplicacion = multiplicar(a, b);
    resultadoMultiplicacion.textContent = typeof multiplicacion === 'string' 
        ? `Multiplicación: ${multiplicacion}` 
        : `Multiplicación: ${a} x ${b} = ${multiplicacion}`;

    const division = dividir(a, b);
    resultadoDivision.textContent = division;
});