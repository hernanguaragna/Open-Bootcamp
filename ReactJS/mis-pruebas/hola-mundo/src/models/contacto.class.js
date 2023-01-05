// Componente A: Este componente va a tener disponer un Contacto(crea una clase para ello), que va a contar con las siguientes características:

// Nombre: que será un String.

// Apellido: también un String.

// Email: de nuevo un String.

// Conectado: será un booleano que nos indicará si la persona está conectada o no.

export class Contacto{
    Nombre = "";
    Apellido = "";
    Email = "";
    Conectado = false

    constructor (Nombre,Apellido,Email,Conectado){
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Email = Email;
        this.Conectado = Conectado;
}
}