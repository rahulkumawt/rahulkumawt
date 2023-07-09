import express from 'express';

const router = express.Router();

//import controller
import * as tasksubmissionController from '../controller/tasksubmission.controller.js'; 

router.post("/save",tasksubmissionController.save);

router.get("/fetch",tasksubmissionController.fetch);

router.delete("/delete",tasksubmissionController.Deletetasksubmission);

router.patch("/update",tasksubmissionController.Updatetasksubmission);

export default router;