module.exports = (req, res, next) => {
    if (req.session && req.session.user) {
        next();
    } else {
        res.status(401).json({ message: 'You do not have credentials to access this page' });
    }
}