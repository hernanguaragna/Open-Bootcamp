/**
 * *Ejemplo de uso del metodo de ciclo de vida
 * *del componente clase y ciclo de vida del 
 * *componente funcional.
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount(){
        console.log('Comportamiento ants de que el componente sea añadido al DOM(renderice) ')
    }
    render() {
        return (
            <div>
               <h1>Did Mount</h1> 
            </div>
        );
    }
}




export const DidMountHook = () => {

useEffect(() => {
    console.log('Comportamiento ants de que el componente sea añadido al DOM(renderice) ')
    
}, []);

    return (
        <div>
         <h1>Did Mount</h1>   
        </div>
    );
}




