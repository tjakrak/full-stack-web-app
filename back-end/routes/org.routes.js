import express from 'express';

const router = express.Router();

// Register a new user
// router.post("/register", register);

export default (app) => {
    app.use("/api/org", router);
};
  