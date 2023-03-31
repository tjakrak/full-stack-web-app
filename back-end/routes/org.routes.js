import express from 'express';
import { register } from '../controllers/organization.controller.js'
import { authMiddleWare } from '../controllers/jwt.controller.js';

const router = express.Router();

// Register a new org
router.post("/org", register);

export default (app) => {
    app.use("/api", router);
};
  