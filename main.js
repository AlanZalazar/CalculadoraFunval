import { sumar } from "./sumar.js";
import { restar } from "./restar.js";
import { multiplicar } from "./multiplicar.js";
import { dividir } from "./dividir.js";

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

let resultadoSuma = document.getElementById("resultadoSuma");
let resultadoResta = document.getElementById("resultadoResta");
let resultadoMultiplicacion = document.getElementById(
  "resultadoMultiplicacion"
);
let resultadoDivision = document.getElementById("resultadoDivision");

document.getElementById("btnCalcular").addEventListener("click", () => {
  let a = parseFloat(num1.value);
  let b = parseFloat(num2.value);

  resultadoSuma.textContent = sumar(a, b);
  resultadoResta.textContent = restar(a, b);
  resultadoMultiplicacion.textContent = multiplicar(a, b);
  resultadoDivision.textContent = dividir(a, b);
});
