const router = require('express').Router();
const { isAuth, isOwner } = require('../middlewares/guards');
const preload = require('../middlewares/preload');
const { getAll, create, edit, remove, getMany} = require('../services/product');

router.get('/', async (req, res) => {
    const data = await getAll();

    res.json(data);
});

router.post('/', isAuth(), async (req, res) => {
    const data = {
        bandName: req.body.bandName,
        title: req.body.title,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        ownerId: req.user._id
    }
    const result = await create(data);

    res.status(201).json(result);
});

router.get('/:id', preload(), async (req, res) => {
    const item = req.data;

    res.json(item);
});

router.put('/:id', isAuth(), preload(), isOwner(), async (req, res) => {
    try {
        const data = {
            bandName: req.body.bandName,
            title: req.body.title,
            price: req.body.price,
            imageUrl: req.body.imageUrl,
            description: req.body.description,
        }
        const result = await edit(data, req.params.id);

        res.status(201).json(result);
    } catch (err) {
        res.status(err.status || 400).json({ message: err.message });
    }
});

router.delete('/:id', isAuth(), preload(), isOwner(), async (req, res) => {
    try {
        const result = await remove(req.params.id);

        res.status(204).json({ message: 'Resourse deleted successfully' });
    } catch (err) {
        res.status(err.status || 400).json({ message: err.message });
    }
});+

router.post('/wishlist', isAuth(), async (req, res) => {
    const products = await getMany(req.body);
    res.status(200).json(products);
});


module.exports = router;