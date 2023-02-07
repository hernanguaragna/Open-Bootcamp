import React,{useState} from 'react';
//*Definmiendo estilos en constantes

//? Estilo para contacto logueado

const loggedStyle ={
    color: "white"
}

//? Estilo para usuario que no esta logueado

const unloggedStyle = {
    color:"tomato",
    fontWeight: "bold"
}

const GreetingStyled = (props) => {
    //* Genero un estado para el componente
    //* y asi controlar si el usuario esta o no logueado
    const [Logged, setLogged] = useState(false);
    
    const greetingUser = () => (<p>Hola, {props.name}</p>);
    const pleaseLogin = () => (<p> Please loggin</p>);

    return (
        <div style={Logged ? loggedStyle : unloggedStyle}>

        {Logged ? 
        greetingUser()
        : 
        pleaseLogin()
         }
           
            <button onClick={()=>{
                console.log('Boton pulsado')
                setLogged(!Logged)
            }
            }>
                {Logged ? 'logout' : 'login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
