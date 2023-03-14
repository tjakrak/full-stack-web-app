import { db } from '../models/index.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { secretKey } from '../config/jwt.config.js';
import passport from 'passport';

// Create a JWT with a payload containing the user's ID and email
function generateJWT(user) {
    const payload = {
        id: user.id,
        email: user.username
    };

    const options = {
        expiresIn: '1h'
    };
    
    const token = jwt.sign(payload, secretKey, options);

    return token;
}

// register
export const register = async (req, res) => {

    let {firstName, lastName, companyName, username, email, password} = req.body;
  
    // Hash password uding bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        const user = await db.user.findOne({ where: { username: email } });
    
        // Check if user already exist in the database
        if (user) {
          return res.status(400).json({ message: 'Email already registered.' });
        }
    
        // Store all the information to the database
        await db.user.create({
            first_name: firstName,
            last_name: lastName,
            companyName: companyName,
            username: username,
            email: email, 
            password: hashedPassword 
        });
    
        console.log('Successfully created a new user');
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