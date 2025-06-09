export function multiplicar(a, b) {
  if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0)
    return "Error: Solo se permiten números válidos.";
  else {
    return a * b;
  }
}
