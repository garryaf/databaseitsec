const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserLogin = require('../models/UserLogins');
const { auth, adminAuth, JWT_SECRET } = require('../middleware/auth');

// Register new user (admin only)
router.post('/register', adminAuth, async (req, res) => {
    try {
        const { username, nama, email, password, level } = req.body;

        // Validasi input
        if (!username || !nama || !email || !password || !level) {
            return res.status(400).json({ message: 'Semua field harus diisi' });
        }

        // Cek apakah username atau email sudah ada
        const existingUser = await UserLogin.findOne({
            $or: [{ username }, { email }]
        });

        if (existingUser) {
            return res.status(400).json({ message: 'Username atau email sudah terdaftar' });
        }

        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Buat user baru
        const newUser = new UserLogin({
            username,
            nama,
            email,
            password: hashedPassword,
            level
        });

        const savedUser = await newUser.save();
        
        // Hapus password dari response
        const userResponse = savedUser.toObject();
        delete userResponse.password;

        res.status(201).json({
            message: 'User berhasil dibuat',
            user: userResponse
        });
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
});

// Login user
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validasi input
        if (!username || !password) {
            return res.status(400).json({ message: 'Username dan password harus diisi' });
        }

        // Cari user berdasarkan username
        const user = await UserLogin.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Username atau password salah' });
        }

        // Verifikasi password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Username atau password salah' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, username: user.username, level: user.level },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Hapus password dari response
        const userResponse = user.toObject();
        delete userResponse.password;

        res.json({
            message: 'Login berhasil',
            token,
            user: userResponse
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
});

// Get current user profile
router.get('/profile', auth, async (req, res) => {
    try {
        const userResponse = req.user.toObject();
        delete userResponse.password;
        res.json(userResponse);
    } catch (error) {
        console.error('Get profile error:', error);
        res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
});

// Update user profile
router.patch('/profile', auth, async (req, res) => {
    try {
        const { nama, email } = req.body;
        const updates = {};

        if (nama) updates.nama = nama;
        if (email) {
            // Cek apakah email sudah digunakan user lain
            const existingUser = await UserLogin.findOne({ 
                email, 
                _id: { $ne: req.user._id } 
            });
            if (existingUser) {
                return res.status(400).json({ message: 'Email sudah digunakan' });
            }
            updates.email = email;
        }

        const updatedUser = await UserLogin.findByIdAndUpdate(
            req.user._id,
            updates,
            { new: true }
        );

        const userResponse = updatedUser.toObject();
        delete userResponse.password;

        res.json({
            message: 'Profile berhasil diupdate',
            user: userResponse
        });
    } catch (error) {
        console.error('Update profile error:', error);
        res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
});

// Change password
router.patch('/change-password', auth, async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;

        if (!currentPassword || !newPassword) {
            return res.status(400).json({ message: 'Password lama dan baru harus diisi' });
        }

        // Verifikasi password lama
        const isValidPassword = await bcrypt.compare(currentPassword, req.user.password);
        if (!isValidPassword) {
            return res.status(400).json({ message: 'Password lama salah' });
        }

        // Hash password baru
        const saltRounds = 10;
        const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);

        // Update password
        await UserLogin.findByIdAndUpdate(req.user._id, {
            password: hashedNewPassword
        });

        res.json({ message: 'Password berhasil diubah' });
    } catch (error) {
        console.error('Change password error:', error);
        res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
});

// Get all users (admin only)
router.get('/', adminAuth, async (req, res) => {
    try {
        const users = await UserLogin.find().select('-password');
        res.json(users);
    } catch (error) {
        console.error('Get all users error:', error);
        res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
});

// Get user by ID (admin only)
router.get('/:id', adminAuth, async (req, res) => {
    try {
        const user = await UserLogin.findById(req.params.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User tidak ditemukan' });
        }
        res.json(user);
    } catch (error) {
        console.error('Get user by ID error:', error);
        res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
});

// Update user by ID (admin only)
router.patch('/:id', adminAuth, async (req, res) => {
    try {
        const { username, nama, email, level } = req.body;
        const updates = {};

        if (username) updates.username = username;
        if (nama) updates.nama = nama;
        if (email) updates.email = email;
        if (level) updates.level = level;

        const updatedUser = await UserLogin.findByIdAndUpdate(
            req.params.id,
            updates,
            { new: true }
        ).select('-password');

        if (!updatedUser) {
            return res.status(404).json({ message: 'User tidak ditemukan' });
        }

        res.json({
            message: 'User berhasil diupdate',
            user: updatedUser
        });
    } catch (error) {
        console.error('Update user error:', error);
        res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
});

// Delete user by ID (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
    try {
        const user = await UserLogin.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User tidak ditemukan' });
        }
        res.json({ message: 'User berhasil dihapus' });
    } catch (error) {
        console.error('Delete user error:', error);
        res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
});

// Reset password (admin only)
router.patch('/:id/reset-password', adminAuth, async (req, res) => {
    try {
        const defaultPassword = 'password123';
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(defaultPassword, saltRounds);

        const user = await UserLogin.findByIdAndUpdate(
            req.params.id,
            { password: hashedPassword },
            { new: true }
        ).select('-password');

        if (!user) {
            return res.status(404).json({ message: 'User tidak ditemukan' });
        }

        res.json({
            message: `Password user ${user.username} berhasil direset ke: ${defaultPassword}`,
            user
        });
    } catch (error) {
        console.error('Reset password error:', error);
        res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
});

module.exports = router;
