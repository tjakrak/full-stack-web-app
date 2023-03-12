import express from 'express';
import { create, login } from '../controllers/user.controller.js';

const router = express.Router();

// Register a new user
router.post("/register", create);

// Login
router.get("/login", login);

// // Create a new Tutorial
// router.post("/", tutorials.create);

// // Retrieve all Tutorials
// router.get("/", tutorials.findAll);

// // Retrieve all published Tutorials
// router.get("/published", tutorials.findAllPublished);

// // Retrieve a single Tutorial with id
// router.get("/:id", tutorials.findOne);

// // Update a Tutorial with id
// router.put("/:id", tutorials.update);

// // Delete a Tutorial with id
// router.delete("/:id", tutorials.delete);

// // Delete all Tutorials
// router.delete("/", tutorials.deleteAll);

// app.use("/api/tutorials", router);

export default (app) => {
    app.use("api/user", router);
};
  