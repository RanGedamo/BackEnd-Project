const STUDENTS_API = "http://localhost:3030/api/students"

export const studentsAPI = async()=>{
    try{
       return await fetch(STUDENTS_API) .then(res=>res.json())
    }
    catch(err){console.log(err);}
    finally{}

}