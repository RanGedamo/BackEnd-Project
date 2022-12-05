const router = require('express').Router();
const {createCourse,getAllCourses,deleteCourse} = require('../controllers/courses-ctrl');

router.post('/create',createCourse);
router.get('/',getAllCourses);
router.delete('/delete',deleteCourse);


module.exports = router;