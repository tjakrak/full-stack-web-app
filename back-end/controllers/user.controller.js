import { db } from '../models/index.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../config/jwt.config.js';
import passport from 'passport';

// Create a JWT with a payload containing the user's ID and email
function generateJWT(user) {
    const payload = {
        username: user.username,
        email: user.email
    };

    const options = {
        expiresIn: '1h'
    };
    console.log(secretKey);
    const token = jwt.sign(payload, JWT_SECRET_KEY, options);

    return token;
}

// register
export const register = async (req, res) => {

    let {firstName, lastName, companyName, email, password} = req.body;

    // Hash password uding bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        let user = await db.user.findOne({ where: { email: email } });
    
        // Check if user already exist in the database
        if (user) {
          return res.status(400).json({ message: 'Email already registered.' });
        }
    
        // Store all the information to the database
        await db.user.create({
            first_name: firstName,
            last_name: lastName,
            company_name: companyName,
            email: email, 
            password: hashedPassword
        });

        user = {
            email: email
        }
        const jwtToken = generateJWT(user);

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