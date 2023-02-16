// Mala implementación
class Client {
  constructor(private database: Database) {}

  fetchData() {
    return this.database.query("SELECT * FROM users");
  }
}

class Database {
  query(sql: string) {
    // Lógica para consultar la base de datos
  }
}

/* =========================================================== */

// Buena implementación
interface Database {
  query(sql: string): any;
}

class MySQL implements Database {
  query(sql: string) {
    // Lógica para consultar la base de datos MySQL
  }
}

class Postgres implements Database {
  query(sql: string) {
    // Lógica para consultar la base de datos Postgres
  }
}

class Client {
  constructor(private database: Database) {}

  fetchData() {
    return this.database.query("SELECT * FROM users");
  }
}
