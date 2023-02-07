import React, {useState} from 'react';


//*Login / Logout buttons
const LoginButton = ({loginAccion})=>{
    return(

        <button className='btn btn-success mb-3' onClick={loginAccion}>Login</button>
    )

}
const LogoutButton = ({logOutAccion})=>{
    return(

        <button className='btn btn-danger mb-3' onClick={logOutAccion}>Logout</button>
    )

}

//? (Expresiòn true) && expresion => se renderiza la expresion
//? (expresion false) && expresion => no se renderiza la expresion





 const OptionalRender = () => {
    const [access, setAccess] = useState(false);

    const [nMessages, setnMessages] = useState(0);


    // const updateAccess = () => {
	// 		setAccess(!access);
	// 	}
        
    const loginAccion = () => {
        setAccess(true)
    }
    const logOutAccion = () => {
        setAccess(false)
    }
    let optionalButton;

    if (access) {
        optionalButton = <LogoutButton logOutAccion={logOutAccion}></LogoutButton>
    }else{
        optionalButton = <LoginButton loginAccion={loginAccion}></LoginButton>
    
    } 

    let addreadMessage = () => {
        setnMessages(nMessages + 1);
    }
    
    return (
			<div>
				{/** N Messages unread */}
                {access ? (
                    
                    <div>

				{nMessages > 0 && (
					<span className="badge bg-primary mb-3">
						{" "}
						You have {nMessages} new messege{nMessages > 1 && "s"}...
					</span>
				)}
				<br />
				{nMessages === 0 && (
					<span className="badge bg-primary mb-3">
						You have no new messages
					</span>
				)}

				<br />
				<button className="btn btn-info mb-3" onClick={addreadMessage}>
					{nMessages === 0 ? "Add your first message" : "Add another message"}
				</button>
				<br />
                    </div>
                ) :null}
				{optionalButton}
			</div>
		);
}



export default OptionalRender;


