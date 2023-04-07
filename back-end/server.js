import express from 'express';
import './config/load.env.js';
import cors from 'cors';
import db from './models/index.js';
import userRoutes from './routes/user.routes.js';
import orgRoutes from './routes/org.routes.js';
import assessmentRoutes from './routes/assessment.routes.js';
import passport from 'passport';
import { initializePassport } from './config/passport.config.js';
import insertQuestionsToDb from './data/question.data.js';

const app = express();

initializePassport(passport);

app.use(express.json()); // parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded
app.use(cors()); // enables Cross-Origin Resource Sharing

await db.sequelize.sync(); // synchronizes the defined model schema with the database

insertQuestionsToDb();

userRoutes(app);
orgRoutes(app);
assessmentRoutes(app);


// set port, listen for requests
const PORT = process.env.PORT || 8000;

// Create a server that listens to the specified port
app.listen(8000, () => console.log(`Server is running on port ${PORT}.`));