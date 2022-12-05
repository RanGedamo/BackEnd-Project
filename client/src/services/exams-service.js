const STUDENTS_EXAMS_API = "http://localhost:3030/api/exams"

export const studentsExamsAPI = async()=>{
    try{
       return await fetch(STUDENTS_EXAMS_API) .then(res=>res.json())
    }
    catch(err){console.log(err);}

}