const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function register(data, role, res) {
    try {
        const existing = await validateEmail(data.email);

        if (existing) {
            const err = new Error('Email already exists!');
            err.status = 409;
            throw err;
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        if (role === 'admin') {
            data.firstName = 'admin';
            data.lastName = 'admin';
        }

        const user = new User({
            email: data.email,
            hashedPassword,
            role
        });

        await user.save();

        res.json({
            _id: user._id,
            email: user.email,
            role,
            accessToken: createToken(user)
        });
    } catch (err) {
        res.status(err.status || 400).json({ message: err.message });
    }
}

async function login(email, password, role, res) {
    try {
        const user = await validateEmail(email);
        if (!user) {
            const err = new Error('Incorrect email or password');
            err.status = 401;
            throw err;
        }

        const match = await bcrypt.compare(password, user.hashedPassword);
        if (!match) {
            const err = new Error('Incorrect email or password');
            err.status = 401;
            throw err;
        }

        if (user.role != role) {
            const err = new Error('Please sign from the correct portal');
            err.status = 403
            throw err;
        }

        res.json({
            _id: user._id,
            email: user.email,
            role,
            accessToken: createToken(user)
        });
    } catch (err) {
        res.status(err.status || 400).json({ message: err.message });
    }
}

function createToken(user) {
    const token = jwt.sign({
        _id: user._id,
        email: user.email,
        role: user.role
    }, 'super-secret20');

    return token;
}

const validateEmail = async email => {
    const user = await User.findOne({ email });
    return user ? user : false
}

module.exports = {
    register,
    login
};