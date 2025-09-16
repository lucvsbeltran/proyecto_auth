const express = require('express');
const router = express.Router();
const { registerProduct, getProducts } = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', protect, registerProduct);
router.get('/', protect, getProducts);

module.exports = router;
