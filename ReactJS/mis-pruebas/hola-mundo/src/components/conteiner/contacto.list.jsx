import React from "react";
import ContactoComponent from "../pures/forms/contacto";
import { Contacto } from "../../models/contacto.class";

const ContactoListComponent = () => {
    const defaultContacto = new Contacto("Juan", "Gomez", "juan@gmail.com",false);
 
    
 
     return (
         <div>
             <div>
                <h1>Nombre del Contacto:</h1> 
             </div>
             {/*  TODO aplicar un for/map para renderizar una lista */}
             <ContactoComponent Contacto={defaultContacto}> </ContactoComponent>
         </div>
     );
 };
 
 
 
 
 
 export default ContactoListComponent;