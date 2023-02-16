// Mala implementación
interface Animal {
  swim(): void;
  fly(): void;
  walk(): void;
}

class Dog implements Animal {
  swim() {
    // Lógica para hacer que el perro nade
  }

  fly() {
    // No hay lógica para hacer que el perro vuele
  }

  walk() {
    // Lógica para hacer que el perro camine
  }
}

/*  ==================================================== */

// Buena implementación
interface Swimmable {
  swim(): void;
}

interface Flyable {
  fly(): void;
}

interface Walkable {
  walk(): void;
}

class Dog implements Swimmable, Walkable {
  swim() {
    // Lógica para hacer que el perro nade
  }

  walk() {
    // Lógica para hacer que el perro camine
  }
}
