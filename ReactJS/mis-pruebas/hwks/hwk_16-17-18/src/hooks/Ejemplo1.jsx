/**
 * *Elemplo de uso deo Hook useState
 * *Crear un componente de tipo fincion y acceder a su estado
 * *privado a atraves de un hook y, ademas, poder modificarlo
 */

import React, {useState} from 'react';

     const Ejemplo1 = () => {

    //valor inicial para un contador
    const valorInicial = 0;

    //valor inicial para una persona
    const personaInicial = {
        nombre : "Hernan" ,
        email : "hernan@gmail.com"
    }
    /**
     * *Busco que el valorInicial y el personaInicial sean parte del componente para asi gestionar su cambio y que este se actualice
     * *en el html
     * *const [nombreVariable, funcionParaCambiar] = useState{valorInicial}
     */
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * *funcion para actualizar el estado privado del contador
     */
    function incrementarContador(){
        //?funcionParaCambiar(nuevoValor)
        setContador(contador + 1)
    }
    /**
     * *Funcion para actualizar un objeto
     */
    
    function actualizarPersona (){
        setPersona(
    {        
        nombre: "Nico",
        email: "nico@gmail.com"
    }
    )


    }
    return (
        <div>
            <h1>***Ejemplo de useState()</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h3>EMAIL: {persona.email}</h3>
            {/* Bloque de botones para actualizar los estados */}
            <button onClick={incrementarContador} >Incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>
        </div>
    );
}
export default Ejemplo1;

