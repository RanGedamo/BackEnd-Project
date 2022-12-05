const coursesModel = require('../models/courses-model');

const getAllCourses = (req, res) => {
    coursesModel.find().then(result => res.json({result}))
    .catch(err=>res.json({error:err}))
};

const createCourse = (req,res)=>{
    coursesModel.insertMany(req.body).then((result)=>res.json({success:true,result}))
    .catch(err=>res.json({success:false,error:err}))
}
;
const deleteCourse = (req,res)=>{
    coursesModel.deleteOne({email:req.body.email}).then((result)=>res.json({success:true,result}))
    .catch(err=>res.json({success:false,error:err}))
}

module.exports={
    createCourse,
    getAllCourses,
    deleteCourse
}