function Persona(nombre, edad, dni, sexo, peso, altura, anoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anoNacimiento = anoNacimiento;
  
    this.mostrarGeneracion = function () {
      let mensaje = '';
      if (1994 <= this.anoNacimiento && this.anoNacimiento <= 2010) {
        mensaje = "Generación Z: Irreverencia";
      } else if (1981 <= this.anoNacimiento && this.anoNacimiento <= 1993) {
        mensaje = "Generación Y: Frustración";
      } else if (1969 <= this.anoNacimiento && this.anoNacimiento <= 1980) {
        mensaje = "Generación X: Obsesión por el éxito";
      } else if (1949 <= this.anoNacimiento && this.anoNacimiento <= 1968) {
        mensaje = "Generación Baby Boom: Ambición";
      } else if (1930 <= this.anoNacimiento && this.anoNacimiento <= 1948) {
        mensaje = "Generación Silent: Austeridad";
      } else {
        mensaje = "No se puede determinar la generación";
      }
      alert(mensaje);
    };
  
    this.esMayorDeEdad = function () {
      let mensaje = this.edad >= 18 ? "Es mayor de edad" : "No es mayor de edad";
      alert(mensaje);
    };
  
    this.mostrarDatos = function () {
      let datos = `Nombre: ${this.nombre}, Edad: ${this.edad}, DNI: ${this.dni}, Sexo: ${this.sexo}, Peso: ${this.peso}, Altura: ${this.altura}, Año de Nacimiento: ${this.anoNacimiento}`;
      return datos;
    };
  }
  
  function crearPersona() {
    const nombre = document.getElementById('nombre').value;
    // Obtener otros valores del formulario
  
    const edad = parseInt(document.getElementById('edad').value);
    const dni = document.getElementById('dni').value;
    const sexo = document.getElementById('sexo').value.toUpperCase();
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const anoNacimiento = parseInt(document.getElementById('anoNacimiento').value);
  
    const nuevaPersona = new Persona(nombre, edad, dni, sexo, peso, altura, anoNacimiento);
    const datos = nuevaPersona.mostrarDatos();
    alert(datos);
  }
  
  function mostrarGeneracion() {
    const nombre = document.getElementById('nombre').value;
    // Obtener otros valores del formulario
  
    const edad = parseInt(document.getElementById('edad').value);
    const dni = document.getElementById('dni').value;
    const sexo = document.getElementById('sexo').value.toUpperCase();
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const anoNacimiento = parseInt(document.getElementById('anoNacimiento').value);
  
    const persona = new Persona(nombre, edad, dni, sexo, peso, altura, anoNacimiento);
    persona.mostrarGeneracion();
  }
  
  function esMayorDeEdad() {
    const nombre = document.getElementById('nombre').value;
    // Obtener otros valores del formulario
  
    const edad = parseInt(document.getElementById('edad').value);
    const dni = document.getElementById('dni').value;
    const sexo = document.getElementById('sexo').value.toUpperCase();
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const anoNacimiento = parseInt(document.getElementById('anoNacimiento').value);
  
    const persona = new Persona(nombre, edad, dni, sexo, peso, altura, anoNacimiento);
    persona.esMayorDeEdad();
  }
  