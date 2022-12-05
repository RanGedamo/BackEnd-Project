const router = require('express').Router();
const {createLastStudent,deleteLastStudent,getAllLastStudents,getAllLastStudentsByStatus} = require('../controllers/lastStudents-ctrl');

router.post('/create',createLastStudent);
router.get('/',getAllLastStudents);
router.get('/byStatus',getAllLastStudentsByStatus);
router.delete('/delete',deleteLastStudent);


module.exports = router;