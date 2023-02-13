import React, {useState,useEffect} from 'react';
import { getAllUsers } from '../../services/fetchService';
const FetchExample = () => {
    const [users, setUsers] = useState(0);

    useEffect(() => {
        
        return () => {
            obteinUsers()
        };
    }, []);
    const obteinUsers = ()=>{
        getAllUsers()
        .then((response)=>{
            console.log('All users', response.data)
            setUsers(response.data)
        })
        .catch((error) =>{
            alert(`Error while retreiving the users ${error}`)
        })
        .finally(() =>{
            console.log('Ended obtaining users')
            console.table(users)
        })

    }
    return (
        <div>
            
            <h2>
                
            </h2>
        </div>
    );
}

export default FetchExample;
