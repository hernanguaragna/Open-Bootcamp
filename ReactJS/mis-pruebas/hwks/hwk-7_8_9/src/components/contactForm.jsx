import React, { useRef } from 'react';

const ContactForm = ({ onAddContact }) => {
  const name = useRef('');
  const email = useRef('');

  function addContact(e) {
    e.preventDefault();

    const newContact = { nombre: name.current.value, email: email.current.value, conectado: true };

    onAddContact(newContact);
    name.current.value = '';
    email.current.value = '';
  }

  return (
    <form onSubmit={addContact} className="contact-component">
    <div className='mb-3'>
      <h3 className="text-center, contact-component__title">Agregar contacto</h3>
    </div>

      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nombre</label>
    <input ref={name} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">E-mail</label>
    <input ref={email} type="email" class="form-control" id="exampleInputPassword1"/>
    <div id="emailHelp" class="form-text">Núnca compartiremos tu E-mail con nadie más.</div>
  </div>
  </div>
  
  <button onClick={addContact} type="submit" class="btn btn-primary">Agregar</button>
    </form>
  );
};

export default ContactForm;