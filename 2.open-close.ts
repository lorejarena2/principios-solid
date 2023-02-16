// Mala implementación
class Vehicle {
  startEngine() {
    // Lógica para iniciar el motor del vehículo
  }
}

class Car extends Vehicle {
  startEngine() {
    // Lógica específica para iniciar el motor de un automóvil
  }
}

class Motorcycle extends Vehicle {
  startEngine() {
    // Lógica específica para iniciar el motor de una motocicleta
  }
}

/*  ==================================================================== */

// Buena implementación
interface Engine {
  start(): void;
}

class Vehicle {
  engine: Engine;

  startEngine() {
    this.engine.start();
  }
}

class CarEngine implements Engine {
  start() {
    // Lógica específica para iniciar el motor de un automóvil
  }
}

class MotorcycleEngine implements Engine {
  start() {
    // Lógica específica para iniciar el motor de una motocicleta
  }
}
