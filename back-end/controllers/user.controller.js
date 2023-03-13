import { db } from '../models/index.js';
import bcrypt from 'bcrypt';
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// register
export const register = async (req, res) => {

    let { email, password } = req.body;

    console.log({ email, password });
  
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword);

    // Check if email already exist
    db.user.findOne({ where: { user_name: email } }).then(user => {
        console.log(user);
        if (user) {
            return res.status(400).json({ message: "Email already registere./" });   
        }
        else {
            // Create new user
            db.user.create({ user_name: email, password: hashedPassword }).then(newUser => {
                console.log("Successfully create a new user");
                return res.status(200).json({ message: "You have successfully registered." });
            })
            .catch(err => {
                console.log(err);
                return res.status(500).json({ message: "Error creating user." });
            });
        }
    })
    .catch(err => {
        console.log(err);
        return res.status(500).json({ message: "Error checking email." });
    });
};

// login
export const login = async(req, res) => {

    let { email, password } = req.body;

    // Find user by email
    db.user.findOne({ where: { user_name: email } }).then(user => {
        if (!user) {
            // User not found
            return res.status(400).json({ message: "Invalid email or password" });
        }
  
        // Compare password with hashed password in database
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // Passwords match, return user info
                return res.status(200).json({
                    id: user.id,
                    email: user.user_name,
                    message: "Login successful"
                });
            } else {
                // Passwords do not match
                return res.status(400).json({ message: "Invalid email or password" });
            }
            }).catch(err => {
                console.error(err);
                return res.status(500).json({ message: "Server error" });
            });
    }).catch(err => {
        console.error(err);
        return res.status(500).json({ message: "Server error" });
    });
}