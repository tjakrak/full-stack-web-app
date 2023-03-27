import express from 'express';

const router = express.Router();

// Register a new user
// router.post("/add", add);

export default (app) => {
    app.use("/api/assessment", router);
};
  