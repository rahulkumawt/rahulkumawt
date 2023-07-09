import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
const app=express();

//to link routes at applicatin level
import UserRouter from
'./routes/user.router.js';
import groupRouter from
'./routes/group.router.js';
import projectRouter from
'./routes/project.router.js';
import assigntaskRouter from 
'./routes/assigntask.router.js';
import tasksubmissionRouter from 
'./routes/tasksubmission.router.js';
import assaignprojectRouter from
'./routes/assaignproject.router.js';

// to resolve cross origin problem
app.use(cors());




//to extract body data from request(post,put,delete,patch)
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//route level middleware
app.use('/user',UserRouter);
app.use('/group',groupRouter);
app.use('/project',projectRouter);
app.use('/assigntask',assigntaskRouter);
app.use('/tasksubmission',tasksubmissionRouter);
app.use('/assaignproject',assaignprojectRouter);


app.listen(3001);
console.log("server invoked at link http://localhost:3001");

