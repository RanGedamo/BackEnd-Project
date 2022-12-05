const USERS_API = "http://localhost:3030/api/users";

export const usersAPI = async()=>{
    try{
        return await fetch(USERS_API).then(res=>res.json())
    }
    catch(err){console.log(err);}
}