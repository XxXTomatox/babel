class Main{

    constructor(nombre,apellido,edad,estatura){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.estatura = estatura
    }

    mostrarDatos(){
        console.info(`
            NOMBRE: ${this.nombre},
            APELLIDO: ${this.apellido},
            EDAD: ${this.edad},
            ESTATURA : ${this.estatura}
        `);
    }

    actualizarDatos(nombre=this.nombre,apellido=this.apellido,edad=this.edad,estatura=this.estatura){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.estatura = estatura
        this.mostrarDatos();
    }
    
    setNombre(nombre){
        this.nombre = nombre
    }
    getNombre(){
        return this.nombre
    }
    setApellido(apellido){
        this.apellido = apellido
    }
    getApellido(){
        return this.apellido
    }
    setEdad(edad){
        this.edad = edad
    }
    getEdad(){
        return this.edad
    }
    setEstatura(estatura){
        this.estatura = estatura
    }
    getEstatura(){
        return this.estatura
    }
}

let persona1 = new Main("Axel","Martinez",21,160);
let persona2 = new Main("Angel","Vertiz",21,160);

persona1.actualizarDatos("juan","limon",)

console.log(persona2.getNombre());
console.log(persona2.apellido());