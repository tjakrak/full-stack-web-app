import express from 'express';
import { addAssessment, getAssessmentQuestions, getAssessmentsByOrgId } from '../controllers/assessment.controller.js';

const router = express.Router();

// Register a new assessment
router.post("/assessment", addAssessment);

router.get("/assessments", getAssessmentsByOrgId);

router.get("/assessment/questions", getAssessmentQuestions);

export default (app) => {
    app.use("/api", router);
};
  