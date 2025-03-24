const Product = require('../models/ProductModel');
const asyncHandler = require('../middleware/asyncHandler');

// Create Product
exports.createProduct = asyncHandler(async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json(product);
});

// Get All Products
exports.getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find().populate('category');
    res.status(200).json(products);
});

// Get Product by ID
exports.getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id).populate('category');
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
});

// Update Product
exports.updateProduct = asyncHandler(async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
});

// Delete Product
exports.deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(204).send();
});
