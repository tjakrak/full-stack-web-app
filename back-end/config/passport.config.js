import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import bcrypt from 'bcrypt';
import { db } from '../models/index.js';
import { JWT_SECRET_KEY } from '../config/jwt.config.js';

export function initializePassport(passport) {

    passport.use('login', new LocalStrategy({ 
        usernameField: 'email', 
        passwordField: 'password' 
    }, async (email, password, done) => {
        try {
            const user = await db.user.findOne({ where: { email: email } });
        
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

    const jwtOptions = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: `${JWT_SECRET_KEY}`,
    };
    passport.use(new JwtStrategy(jwtOptions, async (jwt_payload, done) => {

        if (payload.exp <= Math.floor(Date.now() / 1000)) {
            // Token has expired
            return done(null, false, { message: 'Token expired' });
        }
        
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

    passport.use(new GoogleStrategy({
        clientID:     process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "https://localhost:3000/auth/google/callback",
        passReqToCallback   : true
    }, 
        async (request, accessToken, refreshToken, profile, done) => {
            try {
                const email = profile.emails[0].value;
                const user = await db.user.findOne({ where: { email: email } });

                if (user) {
                    return done(null, user);
                }

                // Store all the information to the database
                const newUser = await db.user.create({
                    first_name: "firstName",
                    last_name: "lastName",
                    company_name: "companyName",
                    email: email, 
                    password: "hashedPassword"
                });

                return done(null, newUser);
            } catch (err) {
                return done(err);
            }
        }
    ));

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



