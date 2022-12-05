const examsModel = require('../models/exams-model');

const getAllStudentExams = (req, res) => {
    examsModel.find().then(result => res.json({result}))
    .catch(err=>res.json({error:err}))
};

const createStudentExams= (req,res)=>{
    examsModel.insertMany(req.body.user).then((result)=>res.json({success:true,result}))
    .catch(err=>res.json({success:false,error:err}))
}
;
const deleteStudentExams = (req,res)=>{
    examsModel.deleteOne({email:req.body.email}).then((result)=>res.json({success:true,result}))
    .catch(err=>res.json({success:false,error:err}))
}

module.exports={
    createStudentExams,
    getAllStudentExams,
    deleteStudentExams
}