const { Schema, model } = require('mongoose');

const schema = new Schema({
    email: { type: String, required: [true, 'Email is required'] },
    hashedPassword: { type: String, required: [true, 'Password is required'] },
    role: { type: String, default: 'user', enum: ['user', 'admin', 'super-admin'] }
}, {
    collection: 'users'
});

module.exports = model('User', schema);