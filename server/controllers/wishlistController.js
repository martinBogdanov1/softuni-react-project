const router = require('express').Router();
const { create, getById, update, remove } = require('../services/wishlist');

router.post('/', async (req, res) => {
    const existing = await getById(req.body.userId);
    let result = {};

    if (!existing) {
        result = await create(req.body);
    } else {
        result = await update(req.body, existing._id);
    }

    res.status(201).json(result);
});

router.get('/:id', async (req, res) => {
    const result = await getById(req.params.id);
    res.status(200).json(result);
});

router.delete('/', async (req, res) => {
    const result = await remove(req.body.userId, req.body.pid);
    res.status(200).json(result);
});

module.exports = router;