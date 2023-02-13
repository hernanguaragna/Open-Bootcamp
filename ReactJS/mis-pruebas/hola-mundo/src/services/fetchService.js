export const getAllUsers = async () =>{
    
    let response = await fetch('https://reqres.in/api/users')
    //we return the json
    return response.json()
}
export const getAllPagedUsers = async (pages) =>{

    let response = await fetch(`https://reqres.in/api/users?pages=${pages}`)
    //we return the json
    return response.json()
}
export const getUserDetails = async (id) =>{

    let response = await fetch(`https://reqres.in/api/users/${id}`)
    //we return the json
    return response.json()
}
 
