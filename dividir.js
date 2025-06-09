export function dividir(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "División: Error, ingrese solo números.";
  }
  if (b === 0) {
    return "División: Error, no se puede dividir por cero.";
  }
  return `División: ${a / b}`;
}
