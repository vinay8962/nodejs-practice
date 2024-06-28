const express = require('express');
const route = express.Router();

const { getProduct } = require('../controllers/productController');

route.get("/" , (req, res) => {
    res.send('Product Route')
});

route.get('/data', getProduct);

module.exports = route;