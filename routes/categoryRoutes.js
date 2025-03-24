const express = require('express');
const { getCategories, createCategory } = require('../controllers/categoryController'); // Correct import path
const router = express.Router();

// Define routes
router.route('/').get(getCategories).post(createCategory);

module.exports = router;
