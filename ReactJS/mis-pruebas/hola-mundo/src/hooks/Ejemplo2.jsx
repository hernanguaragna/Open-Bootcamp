/**
 * *Ejemplos de uso de:
 * *useState()
 * *useRef()
 * *useEffect()
 */
import React, {useState,useRef,useEffect} from 'react';


const Ejemplo2 = () => {
    /** 
     * *Voy a crear dos contadores distintos
     * * Cada uno va a ser diferente
     */

    const [contador1, setcontador1] = useState(0);
    const [contador2, setContador2] = useState(0);
    /**
     * *Voy a crear una referenci con useRef() para asociar una variable con un elemento
     * * del DOM del componente vista de HTML
     */
    const miRef = useRef();

    function incrementarContador1(){
        setcontador1(contador1 + 1)
    }

    function incrementarContador2() {
        setContador2(contador2 + 1)
    }

    /**
     * *Trabajo con useEffect
     */
    /**
     * ?Caso 1 : Ejecutar SIEMPRE un sipper de codigo
     * *Cada vez que hata un cambio en el estado del componente 
     * *se ajusta aquello que este dentro del useEffect()
     */
   

    //  CASO 1 :
    //  useEffect(() => {
    //     console.log("CAMBIO EN EL ESTADO DEL COMPONENTE")
    //     console.log("Mostrando referencia a elemento del DOM")
    //     console.log(miRef)
        
    // });
    /**
     * ? CASO 2 : SE VA A EJECUTAR SOLO CUANDO SE CAMBIE CONTADOR1 
     * ? EN CASO DE EJECUTAR CONTADOR2 NO HABRA CAMBIOS
     */
    // useEffect(() => {
    //     console.log("CAMBIO EN EL ESTADO DEL CONTADOR1")
    //     console.log("Mostrando referencia a elemento del DOM")
    //     console.log(miRef)
    // }, [contador1]);

    /**
     * ? CASO 3 : SE VA A EJECUTAR SOLO CUANDO SE CAMBIE CONTADOR1 o CONTADOR2
     * ? CADA VEZ QUE HAYA UN CAMBIO TANTO EN CONTADOR1 COMO EN CONTADOR2, SE EJECUTARA LO QUE DIGA EL USEEFECT()
     */
     useEffect(() => {
        console.log("CAMBIO EN EL ESTADO DEL CONTADOR1 / CONTADOR2")
        console.log("Mostrando referencia a elemento del DOM")
        console.log(miRef)
    }, [contador1,contador2]);

    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef(), useEffect ***</h1>
            <h2>CONTADOR 1: {incrementarContador1}</h2>
            <h2>CONTADOR 2: {incrementarContador2}</h2>
            {/** Elemento referenciado
             */}
             <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
             {/**Botones para incrementar los contadores */}
             <button onClick={incrementarContador1}>Incrementar en contador1</button>
             <button onClick={incrementarContador2}>Incrementar en contador2</button>

        </div>
    );
}

export default Ejemplo2;
