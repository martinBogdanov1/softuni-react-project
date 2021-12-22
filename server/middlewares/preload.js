const { getById } = require('../services/product');

module.exports = () => async (req, res, next) => {
    const data = await getById(req.params.id);
    req.data = data;

    next();
}