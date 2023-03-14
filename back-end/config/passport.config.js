import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import bcrypt from 'bcrypt';
import { db } from '../models/index.js';
import { secretKey } from '../config/jwt.config.js';

export function initializePassport(passport) {

    passport.use('login', new LocalStrategy({ 
        usernameField: 'email', 
        passwordField: 'password' 
    }, async (email, password, done) => {
        try {
            const user = await db.user.findOne({ where: { username: email } });
        
            if (!user) {
                return done(null, false, { message: 'Invalid credentials' });
            }
        
            const isMatch = await bcrypt.compare(password, user.password);
        
            if (!isMatch) {
                return done(null, false, { message: 'Invalid credentials' });
            }
        
            return done(null, user);
    
        } catch (err) {
            return done(err);
        }
    }));

    const opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: `${secretKey}`,
    };
    passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
        try {
            console.log(jwt_payload);
            const user = await db.user.findByPk(jwt_payload.sub);
        
            if (!user) {
                return done(null, false);
            }
        
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await db.user.findByPk(id);
            done(null, user);
        } catch (err) {
            done(err);
        }
    });
};



