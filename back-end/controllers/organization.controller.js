import passport from 'passport';
import { db } from '../models/index.js';
import { generateJWT, decodeJWT } from './jwt.controller.js';

export const register = async (req, res, next) => {
    passport.authenticate('jwt', async (err, user, info) => {
                
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Server error' });
        }
    
        if (!user) {
            return res.status(400).json({ message: info.message });
        }

        const { orgName } = req.body;
    
        try {
            // Store organization to the database
            const org = await db.org.create({
                organization_name: orgName._value
            });
    
            // Add organization id to the database
            const updatedData = { organization_id: `${org.id}` };
            await db.user.update(updatedData, { where: { id: user.id } });

            user.organization_id = org.id;
            const newJWT = generateJWT(user);
    
            return res.status(200).json({
                accessToken: `Bearer ${newJWT}`,
                message: 'You have successfully registered a new org.', 
            });
    
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Error creating org.' });
        }
    })(req, res, next)
};