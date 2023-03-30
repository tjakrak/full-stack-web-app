import express from 'express';
import { register } from '../controllers/organization.controller.js'
import { authMiddleWare, generateJWT } from '../controllers/jwt.controller.js';

const router = express.Router();

// Register a new org
router.post("/register", authMiddleWare, register);

export default (app) => {
    app.use("/api/org", router);
};
  