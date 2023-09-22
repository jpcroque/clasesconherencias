class Person {
    constructor(name, edad, profesion, cargo) {
      this.name = name;
      this.edad = edad;
      this.profesion = profesion;
      this.cargo = cargo;
    }
  
    introduceSelf() {
      console.log(`Nombre: ${this.name} Edad: ${this.edad} Profesion: ${this.profesion} cargo: ${this.cargo}`);
    }
  }

  const gil = new Person("Gil", 25, "programador", "desarrollador");

gil.introduceSelf(); // ¡Hola!, soy Gil