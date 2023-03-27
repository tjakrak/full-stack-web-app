const SESSION_CONFIG = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
};

export default SESSION_CONFIG;