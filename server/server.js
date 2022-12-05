require('dotenv').config()
require('./DB')
const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();
const passport = require('passport')
require('./config/passport-cfg')(passport)
const routerUser = require('./router/users-route');
const routerCourses = require('./router/courses-route');
const routerStudents = require('./router/students-route');
const routerLastStudents = require('./router/lastStudents-route');
const routerStudentsExams = require('./router/exams-route');



app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(passport.initialize())
// app.use('/api/teams',passport.authenticate('jwt', { session: false }), teamsRouter);
// app.use('/api/admin',routerUser);
app.use('/api/users',routerUser);
app.use('/api/courses',routerCourses);
app.use('/api/students',routerStudents);
app.use('/api/lastStudents',routerLastStudents);
app.use('/api/exams',routerStudentsExams);
// app.use('/api/working',routerUser);

app.get('/',(req,res)=>{
    res.send('hello world')
});

app.listen(process.env.port,()=>{
    console.log(`listen to port : ${process.env.port}`);
})


/* ----------------------------------------------------- */

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'../client/build')));
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'../client/build','index.html'));
    });
};

/* ----------------------------------------------------- */


