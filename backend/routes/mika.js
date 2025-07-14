const express = require('express');
const router = express.Router();
const Mika = require('../models/Mika');
const { adminAuth } = require('../middleware/auth');

// Get all Mika
router.get('/', async (req, res) => {
    const data = await Mika.find();
    res.json(data);
});

// Add Mika (admin only)
router.post('/', adminAuth, async (req, res) => {
    const mika = new Mika({ name: req.body.name });
    await mika.save();
    res.status(201).json(mika);
});

// Delete Mika (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
    await Mika.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
});

module.exports = router;
