const jwt = require('jsonwebtoken');


module.exports = () => (req, res, next) => {
    const token = req.headers['x-authorization'];

    try {
        if (token) {
            
            const userData = jwt.verify(token, 'super-secret20');
            req.user = userData;
        }
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid access token' });
    }
}