const express = require('express');
const { getInventory, createInventory } = require('../controllers/inventoryController'); // Ensure the path is correct
const router = express.Router();

// Define routes
router.route('/').get(getInventory).post(createInventory); // Ensure getInventory and createInventory are correctly referenced

module.exports = router;
