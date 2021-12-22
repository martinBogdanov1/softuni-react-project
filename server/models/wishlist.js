const { Schema, model } = require('mongoose');

const schema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    products: [{ type: Schema.Types.ObjectId, ref: 'Products' }]
}, {
    collection: 'wishlist'
});

module.exports = model('Wishlist', schema);