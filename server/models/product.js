const { Schema, model } = require('mongoose');

const schema = new Schema({
    bandName: {type: String},
    title: { type: String },
    price: { type: Number },
    description: { type: String },
    imageUrl: { type: String },
    ownerId: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    collection: 'products'
});

module.exports = model('Product', schema);