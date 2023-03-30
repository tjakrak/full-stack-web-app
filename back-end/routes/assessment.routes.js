import express from 'express';
import { addAssessment } from '../controllers/assessment.controller.js';

const router = express.Router();

// Register a new assessment
router.post("/register", addAssessment);

export default (app) => {
    app.use("/api/assessment", router);
};
  