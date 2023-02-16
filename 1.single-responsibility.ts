function operciones (operacion, num1, num2) {
  if (operacion === 'suma') return num1 + num2
  if (operacion === 'resta') return num1 - num2
  if (operacion === 'multiplicaion') return num1 * num2
  if (operacion === 'division') return num1 / num2
} // Esta funcion no cumple el principio de single responsibility porque hace varias operaciones diferentes


// En cambio para cumplir el principio deberiamos dividir cada operacion en una funcion distinta y asi tener un codigo mas legible y mantenible
function suma (num1: number, num2: number) {
  return num1 + num2
}
function resta (num1: number, num2: number) {
  return num1 - num2
}

function multiplicaion (num1: number, num2: number) {
  return num1 * num2
}

function division (num1: number, num2: number) {
  return num1 / num2
} 