
function calcular(operacion){

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultadoDiv = document.getElementById('resultado');
    const mensajeResultado = document.getElementById('mensajeResultado');

    // Validaciones
    if (isNaN(num1) || isNaN(num2)) {
        mensajeResultado.textContent = 'Por favor, ingrese ambos números.';
        return;
    }

    let resultado;
    let simbolo;

    // división
    if (operacion === 'division') {
        if (num2 === 0) {
            mensajeResultado.textContent = 'Error: No se puede dividir por cero.';

            return;
        }
        resultado = num1 / num2;
        simbolo = '÷';
    }

}