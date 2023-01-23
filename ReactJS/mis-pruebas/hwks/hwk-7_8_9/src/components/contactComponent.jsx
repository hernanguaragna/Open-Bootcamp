import React from 'react';

const ContactComponent = ({ contacto, changeState, remove }) => {
  return (
    <div className="contact-component">
    <div className='mb-3'>
      <h3>{contacto.nombre}</h3>
    </div>
    <div className='mb-3'>
      <h6>{contacto.email}</h6>
    </div>

    <div className='mb-3'>

      <button 
        style={{ backgroundColor: contacto.estado ? 'green' : 'red' }}
        className="btn btn-danger state-button"
        onClick={() => {
          changeState(contacto);
        }}
      >
        {contacto.estado ? 'Conectado' : 'Desconectado'}
      </button>
    </div>
    <div className='mb-3'>
      <button className=" btn btn-outline-danger remove-button" onClick={() => remove(contacto)}>
        Borrar
      </button>
    </div>


    </div>
  );
};

export default ContactComponent;