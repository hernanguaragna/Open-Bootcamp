import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    //*Acá voy a usar un hook para incrementar la edad de uno en uno
    
    const [age, setage] = useState(38);

    const birthday = ()=>{
			//!aca se actualiza el state age
        setage(age + 1);
		}

    return (
        <div>
             <h1>Hola! {props.name} desde componente funcional</h1>
                <h2>Tu edad es {age} años</h2>
                <div>
                    <button onClick={birthday}>
                        Cumplir años
                    </button>
                </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string,
};


export default GreetingF;
