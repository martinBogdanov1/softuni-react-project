const Wishlist = require('../models/wishlist');
const mongoose = require('mongoose');

async function getById(userId) {
    const data = await Wishlist.findOne({ userId }).lean();
    return data;
}

async function create(data) {
    const item = new Wishlist(data);
    await item.save();
    return item;
}

async function update(data, id) {
    return Wishlist.findByIdAndUpdate(id, data, { new: true }).lean();
}

async function remove(userId, id) {
    const idParse = mongoose.Types.ObjectId(id);

    const product = Wishlist.findOneAndUpdate(
        { userId },
        { $pullAll: { products: [idParse] } },
        { new: true })
        .lean();

    return product;
}


module.exports = {
    getById,
    create,
    update,
    remove
};