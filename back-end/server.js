import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { db } from './models/index.js';
import userRoutes from './routes/user.routes.js';
import sessionConfig from './config/session.config.js';
import session from 'express-session';
import flash from 'express-flash';
import passport from 'passport';
import { initializePassport } from './config/passport.config.js';

dotenv.config();

const app = express();

initializePassport(passport);

app.use(express.json()); // parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded
app.use(cors()); // enables Cross-Origin Resource Sharing
app.use(session(sessionConfig));
app.use(passport.initialize()); // Function inside passport which initializes passport
app.use(passport.session()); // Store our variables to be persisted across the whole session. Works with app.use(Session) above
app.use(flash());

db.sequelize.sync(); // synchronizes the defined model schema with the database

app.get("/", (req, res) => {
    res.send("Success!");
})

// app.post("/register", async (req, res) => {
//     const { email, password } = req.body;
// })

userRoutes(app);

// set port, listen for requests
const PORT = process.env.PORT || 8000;

// Create a server that listens to the specified port
app.listen(8000, () => console.log(`Server is running on port ${PORT}.`));