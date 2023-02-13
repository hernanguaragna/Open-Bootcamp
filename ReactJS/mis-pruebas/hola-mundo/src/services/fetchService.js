export const getAllUsers = async () =>{
    let response = await fetch('https://reqres.in/api/users')
    //we return the json
    return response.json()
}
