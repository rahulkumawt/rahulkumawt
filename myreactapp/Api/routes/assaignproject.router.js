import express from 'express';
const router = express.Router();

//import controller
import * as assaignprojectController from '../controller/assaignproject.controller.js';

router.post("/save",assaignprojectController.save);

router.get("/fetch",assaignprojectController.fetch);

router.delete("/delete",assaignprojectController.deleteteassaignproject);

router.patch("/update",assaignprojectController.updateassaignproject);


export default router;