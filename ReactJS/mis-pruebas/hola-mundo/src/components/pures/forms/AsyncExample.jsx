import { Try } from '@mui/icons-material';
import React from 'react';

const AsyncExample = () => {

 


    async function saveSessionStorage(key,value){
        await sessionStorage.setItem(key, value);
        return Promise.resolve(sessionStorage.getItem(key));
    }
    function showStorage(){
        saveSessionStorage("name", "John")
        .then((response)=>{
            let value = response;
            alert (`Save name${value}`)
        }).catch((error)=>{
            alert(`Something went wrong ${error}`);
        }).finally(()=>console.log("Done"));
        }

    async function obtainMessage(){
        let promise = new Promise((resolve, reject)=>{
            setTimeout(() => 
							resolve("Hello"), 3000);
        })
        let messege = await promise;

        await alert(`Messege ${messege}`);
    }  
    
    const returnError = () => {
        return Promise.reject(new Error("Oooooops!"))
    }
    const consumeError = () => {
        returnError()
        .then((response)=>alert(`Everythings go fine${response}`))
        .catch((error)=>alert(`Something went wrong ${error}`))
        .finally(()=>console.log("Done"));
    }

    const urlNotFound = async () => {
        try{
            let response = await fetch("https://invalidURL")
            alert(`Response ${JSON.stringify(response)}`)
        } catch(error){
            alert(`Something went wrong ${error}`)
        }
        
    }
    
    return (
			<div>
				<button onClick={showStorage}>Save and show Name</button>
				<button onClick={obtainMessage}>Receive Message</button>
				<button onClick={consumeError}>Consume Error</button>
				<button onClick={urlNotFound}>URL not found</button>
			</div>
		);
}

export default AsyncExample;
