const router = require('express').Router();
const { register, login } = require('../services/user');

router.post('/register', async (req, res) => {
    await register(req.body, 'user', res);
});

router.post('/register-admin', async (req, res) => {
    await register(req.body, 'admin', res);
});

router.post('/login', async (req, res) => {
    await login(req.body.email, req.body.password, 'user', res);
});

router.post('/login-admin', async (req, res) => {
    await login(req.body.email, req.body.password, 'admin', res);
});

router.get('/logout', (req, res) => {
    res.status(204).end();
});

module.exports = router;