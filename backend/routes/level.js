const express = require('express');
const router = express.Router();
const Level = require('../models/Level');
const { adminAuth } = require('../middleware/auth');

// Get all Level
router.get('/', async (req, res) => {
    const data = await Level.find();
    res.json(data);
});

// Add Level (admin only)
router.post('/', adminAuth, async (req, res) => {
    const level = new Level({ name: req.body.name });
    await level.save();
    res.status(201).json(level);
});

// Delete Level (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
    await Level.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
});

module.exports = router; 