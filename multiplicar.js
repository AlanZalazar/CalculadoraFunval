function multiplicar(a, b) {
    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) 
    return 'Error: Solo se permiten números válidos.';  
    else{
    return a * b;}
    }

    const num1 = parseFloat(prompt("Ingresa el primer número :"));
    const num2 = parseFloat(prompt("Ingresa el segundo número :"));
    
    const resultadoP = document.getElementById('resultado');

    if (isNaN(num1) || isNaN(num2)) {
        resultadoP.innerText = 'Error: Ingresa solo números válidos.';
      } else if (num1 <= 0 || num2 <= 0) {
        resultadoP.innerText = 'Error: Los números deben ser mayores que 0.';
      } else {
        const suma = sumar(num1, num2);
        const resta = restar(num1, num2);
        const multi = multiplicar(num1, num2);
        const division = dividir(num1, num2);
      
        resultadoP.innerText =
        `Suma: ${suma}
        Resta: ${resta}
        Multiplicación: ${multi}
        División: ${division}`;
        }