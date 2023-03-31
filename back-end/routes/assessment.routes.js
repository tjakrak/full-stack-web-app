import express from 'express';
import { addAssessment, getAssessments } from '../controllers/assessment.controller.js';

const router = express.Router();

// Register a new assessment
router.post("/assessment", addAssessment);

router.get("/assessments", getAssessments)

export default (app) => {
    app.use("/api", router);
};
  