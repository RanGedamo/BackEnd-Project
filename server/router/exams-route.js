const router = require('express').Router();
const {createStudentExams,deleteStudentExams,getAllStudentExams} = require('../controllers/exams-ctrl');

router.post('/create',createStudentExams);
router.get('/',getAllStudentExams);
router.delete('/delete',deleteStudentExams);


module.exports = router;