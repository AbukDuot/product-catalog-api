const Inventory = require('../models/InventoryModel'); // Correct model path

// Get all inventory items
const getInventory = async (req, res) => {
    try {
        const inventories = await Inventory.find().populate("product");
        res.status(200).json(inventories);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Create inventory item
const createInventory = async (req, res) => {
    try {
        const inventory = new Inventory(req.body);
        await inventory.save();
        res.status(201).json(inventory);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Export functions
module.exports = { getInventory, createInventory };
