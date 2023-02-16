// Mala implementación
class Rectangle {
  constructor(public width: number, public height: number) {}

  area() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(public size: number) {
    super(size, size);
  }
}

function printArea(rectangle: Rectangle) {
  console.log(rectangle.area());
}

const rectangle = new Rectangle(2, 3);
const square = new Square(2);

printArea(rectangle); // Output: 6
printArea(square); // Output: 4

/* ==================================== */

//Buena implementacion

// Definir una interfaz que represente la operación de cálculo del área
interface Shape {
  area(): number;
}

// Crear la clase Rectangle que implementa la interfaz Shape
class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}

  // Implementar el método area que calcula el área de un rectángulo
  area() {
    return this.width * this.height;
  }
}

// Crear la clase Square que también implementa la interfaz Shape
class Square implements Shape {
  constructor(public size: number) {}

  // Implementar el método area que calcula el área de un cuadrado
  area() {
    return this.size ** 2;
  }
}

// Crear una función que acepte un objeto Shape y lo use para calcular su área
function printArea(shape: Shape) {
  console.log(shape.area());
}

// Crear instancias de Rectangle y Square
const rectangle = new Rectangle(2, 3);
const square = new Square(2);

// Llamar a la función printArea pasando una instancia de Rectangle y de Square
printArea(rectangle); // Output: 6
printArea(square); // Output: 4
