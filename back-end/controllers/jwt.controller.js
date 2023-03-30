import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../config/jwt.config.js';
import passport from 'passport';

// Create a JWT with a payload containing the user's ID and email
export function generateJWT(user) {

    const payload = {
            id: user.id,
            email: user.email,
            company: user.company_name,
            organization_id: user.organization_id
        };

    const options = {
            expiresIn: '24h',
            algorithm: 'HS256'
        };

    const token = jwt.sign(payload, JWT_SECRET_KEY, options);

    return token;
};

export function decodeJWT(jwtToken) {
    // Decode the existing JWT
    const decoded = jwt.decode(jwtToken, { complete: true });

    return decoded.payload;
}

export const authMiddleWare = passport.authenticate('jwt', {session: false});
