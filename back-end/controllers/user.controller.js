import { db } from '../models/index.js';
import bcrypt from 'bcrypt';
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// register
export const create = async (req, res) => {

    let { email, password, password2 } = req.body;

    let errors = [];
  
    console.log({ email, password, password2 });
  
    if (!email || !password || !password2) {
        errors.push({ message: "Please enter all fields" });
    }
  
    if (password.length < 8) {
        errors.push({ message: "Password must be a least 8 characters long" });
    }
  
    if (password !== password2) {
        errors.push({ message: "Passwords do not match" });
    }
  
    if (errors.length > 0) {
        res.status(400).json({ errors });
    } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);

        // Check if email already exist
        db.user.findOne({ where: { user_name: email } }).then(user => {
            console.log(user);
            if (user) {
                return res.status(400).json({ message: "Email already registered" });   
            }
            else {
                // Create new user
                db.user.create({ user_name: email, password: hashedPassword }).then(newUser => {
                    req.flash("success_msg", "You are now registered. Please log in");
                    res.redirect("/user/login");
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).send({ message: "Error creating user" });
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({ message: "Error checking email" });
        });
    }

    return;

};

// login
export const login = async(req, res) => {
    res.status(200).send({ message: "success!" });
    // try {
    //     const { title, description, published = false } = req.body;
    //     if (!title) {
    //         res.status(400).send({ message: "Content can not be empty!" });
    //         return;
    //     }
    
    //     const tutorial = await Tutorial.create({ title, description, published });
    //     res.send(tutorial);
    // } catch (err) {
    //     res.status(500).send({
    //         message: err.message || "Some error occurred while creating the Tutorial.",
    //     });
    // }
}