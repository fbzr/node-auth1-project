module.exports = {
    name: process.env.SESSION_NAME || 'my session',
    secret: process.env.SESSION_SECRET || 'f9bf78b9a18ce6d46a0cd2b0b86df9da',
    resave: false,
    saveUninitialized: process.env.SEND_COOKIES || true, // GDPR laws against setting cookies automatically
    cookie: {
        maxAge: 60000 * 5,
        secure: process.env.USE_SECURE_COOKIES || false, // true in production
        httpOnly: true
    }
}