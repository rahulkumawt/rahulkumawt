import express from 'express';
const router = express.Router();

//import controller
import * as assigntaskController from '../controller/assigntask.controller.js';

router.post("/save",assigntaskController.save);

router.get("/fetch",assigntaskController.fetch);

router.delete("/delete",assigntaskController.deleteassigntask);

router.patch("/update",assigntaskController.updateassigntask);


export default router;