import passport from 'passport';
import { db } from '../models/index.js';
import { generateJWT, decodeJWT } from './jwt.controller.js';

export const register = async (req, res) => {
    const { orgName } = req.body;
    // Get JWT token from Authorization header
    const authHeader = req.headers.authorization;
    const jwtToken = authHeader.split(' ')[1];

    try {
        // Store organization to the database
        const org = await db.org.create({
            organization_name: orgName._value
        });

        // Decode the jwt token
        const decoded = decodeJWT(jwtToken);

        // Add organization id to the database
        const updatedData = { organization_id: `${org.id}` };
        await db.user.update(updatedData, { where: { id: decoded.id } });

        decoded.organization_id = org.id;
        // generate new jwt with the organization id
        const newJWT = generateJWT(null, decoded);

        return res.status(200).json({
            accessToken: `Bearer ${newJWT}`,
            message: 'You have successfully registered a new org.', 
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error creating org.' });
    }
};