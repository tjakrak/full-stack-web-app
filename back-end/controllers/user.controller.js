import { db } from '../models/index.js';
import bcrypt from 'bcrypt';
import { generateJWT } from './jwt.controller.js';
import passport from 'passport';

// register
export const register = async (req, res) => {

    const { 
        first_name: firstName, 
        last_name: lastName, 
        company_name: companyName, 
        email, 
        password 
    } = req.body;

    // Hash password uding bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        const user = await db.user.findOne({ where: { email: email } });
    
        // Check if user already exist in the database
        if (user) {
          return res.status(400).json({ message: 'Email already registered.' });
        }
    
        // Store all the information to the database
        const newUser = await db.user.create({
            first_name: firstName,
            last_name: lastName,
            company_name: companyName,
            email: email, 
            password: hashedPassword
        });

        const jwtToken = generateJWT(newUser.dataValues);

        return res.status(200).json({ 
            message: 'You have successfully registered.', 
            accessToken: `Bearer ${jwtToken}` 
        });

      } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error creating user.' });
      }
};

// login
export const googleRegister = async(req, res, next) => {
    passport.authenticate('google', (err, user, info) => {
        console.log(user);   
    })(req, res, next);
}

// login
export const login = async(req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
        
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Server error' });
        }
    
        if (!user) {
            return res.status(400).json({ message: info.message });
        }
  
        req.logIn(user, function(err) {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Server error' });
            }
            
            const jwtToken = generateJWT(user);
            return res.status(200).json({ accessToken: `Bearer ${jwtToken}` });
        });
  
    })(req, res, next);
}