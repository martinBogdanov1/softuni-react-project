const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
const auth = require('./middlewares/auth');

const dataController = require('./controllers/dataController');
const userController = require('./controllers/usersController');
const wishlistController = require('./controllers/wishlistController');

start();

async function start() {
    await new Promise((resolve, reject) => {
        mongoose.connect('mongodb://localhost:27017/e-store-rest', {
            useNewUrlParser: true,
            useUnifiedTopology: false
        });

        const db = mongoose.connection;
        db.once('open', () => {
            console.log('DB connected');
            resolve();
        });
        db.on('error', (err) => {
            reject(err);
        });
    });

    const app = express();

    app.use(cors());
    app.use(auth());
    app.use(express.json());

    app.use('/api/data/products', dataController);
    app.use('/api/users', userController);
    app.use('/api/data/wishlist', wishlistController);

    app.get('/', (req, res) => {
        res.send('Simple REST service. Send requests to api/data/products.');
    });

    app.listen(5000, () => console.log('server listening on http://localhost:5000'));
}
