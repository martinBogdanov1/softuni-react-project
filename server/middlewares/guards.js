module.exports = {
    isAuth() {
        return (req, res, next) => {
            if (!req.user) {
                res.status(401).json({ message: 'Please sign in.' });
            } else {
                next();
            }
        }
    },
    isGuest() {
        return (req, res, next) => {
            if (req.user) {
                res.status(400).json({ message: 'You are already signed in.' });
            } else {
                next();
            }
        }
    },
    isOwner() {
        return (req, res, next) => {
            const item = req.data;

            if (req.user.role === 'user') {
                res.status(403).json({ message: 'Unnauthorized' });
            } else if (item.ownerId != req.user._id) {
                res.status(403).json({ message: 'You cannot modify this record.' });
            } else {
                next();
            }
        }
    }
}