const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/search', productController.fetchProducts, (req, res) => {
  return res.status(200).json(res.locals.products);
});

module.exports = router;
