const express = require('express');
const router = express.Router();
const UnitKerja = require('../models/UnitKerja');
const { adminAuth } = require('../middleware/auth');

// Get all Unit Kerja
router.get('/', async (req, res) => {
    const data = await UnitKerja.find();
    res.json(data);
});

// Add Unit Kerja (admin only)
router.post('/', adminAuth, async (req, res) => {
    const unitKerja = new UnitKerja({ name: req.body.name });
    await unitKerja.save();
    res.status(201).json(unitKerja);
});

// Delete Unit Kerja (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
    await UnitKerja.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
});

module.exports = router; 