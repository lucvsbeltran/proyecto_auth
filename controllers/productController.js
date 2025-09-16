const Product = require('../models/productModel');

// POST /api/product/register
const registerProduct = async (req, res) => {
  const { name, price, description, stock } = req.body;
  const product = new Product({ name, price, description, stock, user: req.user._id });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};

// GET /api/product
const getProducts = async (req, res) => {
  const products = await Product.find({ user: req.user._id });
  res.json(products);
};

module.exports = { registerProduct, getProducts };
