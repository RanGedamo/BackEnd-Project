const studentsModel = require('../models/Students-model');

const getAllStudents = (req, res) => {
    studentsModel.find().then(result => { 
        if (result) { 
            result?.map(element=>{
                for(let i = 0 ; i<element.length;i++){
                    console.log(i)
                }
            })
        } 
        res.json({result})
    })
    .catch(err=>res.json({error:err}))
};

const createStudent = (req,res)=>{
    studentsModel.insertMany(req.body).then((result)=>res.json({success:true,result}))
    .catch(err=>res.json({success:false,error:err}))
};

const deleteStudent = (req,res)=>{
    studentsModel.deleteOne({email:req.body.email}).then((result)=>res.json({success:true,result}))
    .catch(err=>res.json({success:false,error:err}))
};
const updateStudent = (req,res)=>{
    studentsModel.findOneAndUpdate({email:req.body.email},req.body).then((result)=>res.json({success:true,result}))
    .catch(err=>res.json({success:false,error:err}))
};

module.exports={
    createStudent,
    getAllStudents,
    deleteStudent,
    updateStudent
}