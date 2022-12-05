const LASTS_STUDENTS_API = "http://localhost:3030/api/laststudents"
const LASTS_STUDENTS_WORKING_API = "http://localhost:3030/api/laststudents/bystatus"

export const lastStudentsAPI = async()=>{
    try{
       return await fetch(LASTS_STUDENTS_API) .then(res=>res.json())
    }
    catch(err){console.log(err);}

}

export const lastStudentsWorkingAPI = async()=>{
    try{
        return await fetch(LASTS_STUDENTS_WORKING_API).then(res=>res.json())
    }
    catch(err){console.log(err)}
}