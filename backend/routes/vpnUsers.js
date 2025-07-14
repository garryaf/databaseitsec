const express = require('express');
const router = express.Router();
const VpnUser = require('../models/VpnUser');

// Get all VPN users
router.get('/', async (req, res) => {
    try {
        const users = await VpnUser.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one VPN user
router.get('/:id', async (req, res) => {
    try {
        const user = await VpnUser.findById(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create VPN user
router.post('/', async (req, res) => {
    const user = new VpnUser({
        username: req.body.username,
        nama: req.body.nama,
        email: req.body.email,
        mika: req.body.mika,
        level: req.body.level,
        unitKerja: req.body.unitKerja,
        itopRequest: req.body.itopRequest,
        hostname: req.body.hostname
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update VPN user
router.patch('/:id', async (req, res) => {
    try {
        const user = await VpnUser.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        Object.keys(req.body).forEach(key => {
            user[key] = req.body[key];
        });

        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete VPN user
router.delete('/:id', async (req, res) => {
    try {
        const user = await VpnUser.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await user.remove();
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router; 

// Reset Password
router.patch('/reset-password/:id', async (req, res) => {
    try {
        const user = await VpnUser.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.password = 'default123'; // Sebaiknya di-hash pakai bcrypt (opsional)
        const updatedUser = await user.save();
        res.json({ message: 'Password reset to default123', updatedUser });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
