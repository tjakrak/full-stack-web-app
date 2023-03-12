import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import { db } from '../models/index.js';;

export function initializePassport(passport) {

    passport.use(
        new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
            try {
                const user = await db.user.findOne({ where: { email } });

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
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
            done(null, user.rows[0]);
        } catch (err) {
            done(err);
        }
    });
};



