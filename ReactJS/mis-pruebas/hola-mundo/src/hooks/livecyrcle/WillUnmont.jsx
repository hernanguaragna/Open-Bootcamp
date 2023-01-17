/**
 * *Ejemplo de uso del metodo ComponentWillUnmount para componente de clase
*/
import React, { Component, useEffect } from 'react'

export default class WillUnmont extends Component {
    componentWillUnmount(){
        console.log('comportamiento antes de que el componente desaparezca')
    }
    render() {
        return (
            <div>
            <h1>WillUnmount</h1>
        
      </div>
    )
}
}

// * *Ejemplo de uso dem metodo ComponentWillUnmount para el componente funcional



export const WillUnmontHook = () => {
   useEffect(() => {
    //!Aca no pongo nada

    return () => {
        console.log('comportamiento antes de que el componente desaparezca')
    };
   }, []);

    return (
        <div>
            <h1>WillUnmount</h1>
        </div>
    );
}



