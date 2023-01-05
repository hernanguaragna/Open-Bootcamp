import React from "react";
import PropTypes  from "react";
import { Contacto } from "../../../models/contacto.class";



const ContactoComponent = ({ Contacto }) => {
	return (
		<div>
			<h2>Nombre: {Contacto.Nombre}</h2>
			<h3>Apellido: {Contacto.Apellido}</h3>
			<h4>Email: {Contacto.Email}</h4>

			<h5>El contacto esta : {Contacto.Conectado ? "Esta Conectado" : "Esta Desconectado"}</h5>
		</div>
	);
};

ContactoComponent.propTypes = {
	ContactoComponent: PropTypes.instanceOf(Contacto),
    Nombre:String,
    Apellido:String,
    Email:String,
    Conectado:Boolean,
};

export default ContactoComponent;








