const COURSES_API = "http://localhost:3030/api/courses"

export const coursesAPI = async()=>{
    try{
       return await fetch(COURSES_API) .then(res=>res.json())
    }
    catch(err){console.log(err);}

}