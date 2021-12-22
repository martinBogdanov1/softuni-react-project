const Product = require('../models/product');

async function getAll() {
    return Product.find({}).lean();
}

async function create(data) {
    const item = new Product(data);
    await item.save();
    return item;
}

async function getById(id) {
    return Product.findById(id).lean();
}

async function edit(data, id) {
    return Product.findByIdAndUpdate(id, data, { new: true }).lean();
}

async function remove(id) {
    return Product.findByIdAndDelete(id);
}

async function getMany(array) {
    return Product.find({ _id: { $in: array } });
}

module.exports = {
    getAll,
    getById,
    create,
    edit,
    remove,
    getMany
};