const router = require('express').Router();
const {createStudent,deleteStudent,getAllStudents,updateStudent} = require('../controllers/students-ctrl');

router.post('/create',createStudent);
router.put('/update',updateStudent);
router.get('/',getAllStudents);
router.delete('/delete',deleteStudent);


module.exports = router;