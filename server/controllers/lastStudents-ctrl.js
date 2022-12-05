const lastStudentsModel = require('../models/lastStudents-model');

const getAllLastStudents = (req, res) => {
    lastStudentsModel.find().then(result => res.json({result}))
    .catch(err=>res.json({error:err}))
};
const getAllLastStudentsByStatus = (req, res) => {
    lastStudentsModel.find({status:true}).then(result => res.json({result}))
    .catch(err=>res.json({error:err}))
};

const createLastStudent = (req,res)=>{
    lastStudentsModel.insertMany(req.body.user).then((result)=>res.json({success:true,result}))
    .catch(err=>res.json({success:false,error:err}))
};

const deleteLastStudent = (req,res)=>{
    lastStudentsModel.deleteOne({email:req.body.email}).then((result)=>res.json({success:true,result}))
    .catch(err=>res.json({success:false,error:err}))
};

module.exports={
    createLastStudent,
    getAllLastStudents,
    deleteLastStudent,
    getAllLastStudentsByStatus
}