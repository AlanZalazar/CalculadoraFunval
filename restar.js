export function restar(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Resta: Error, ingrese solo números.";
  }
  return `Resta: ${a - b}`;
}
