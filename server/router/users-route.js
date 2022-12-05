
const router = require('express').Router()
const {login,register,getUsers} = require('../controllers/users-ctrl');


router.post('/create',register)
router.post('/login',login);
router.get('/',getUsers);



module.exports = router ;