const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const vpnUserRoutes = require('./routes/vpnUsers');
const userLoginRoutes = require('./routes/UserLogins');
const nodemailer = require("nodemailer");
const mikaRoutes = require('./routes/mika');
const unitKerjaRoutes = require('./routes/unitKerja');
const levelRoutes = require('./routes/level');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection with retry logic
const connectWithRetry = async () => {
    try {
        await mongoose.connect('mongodb://mongodb:27017/vpn_users', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
        console.log('Retrying in 5 seconds...');
        setTimeout(connectWithRetry, 5000);
    }
};

connectWithRetry();

// API Routes
app.use('/api/vpn-users', vpnUserRoutes);
app.use('/api/users', userLoginRoutes);
app.use('/api/mika', mikaRoutes);
app.use('/api/unit-kerja', unitKerjaRoutes);
app.use('/api/level', levelRoutes);

// Endpoint untuk forgot password
app.post("/api/forgot-password", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email wajib diisi" });

  // Cek apakah email terdaftar di database (opsional)
  // const user = await User.findOne({ email });
  // if (!user) return res.status(404).json({ message: "Email tidak ditemukan" });

  // Konfigurasi transporter (contoh Gmail, ganti sesuai kebutuhan)
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: "garry.afrialdy@mitrakeluarga.com",
      pass: "fhjdqlvrxvnjrnbs",
    },
  });

  // Isi email
  const mailOptions = {
    from: '"VPN System" <your_gmail@gmail.com>',
    to: email,
    subject: "Reset Password VPN",
    text: "Klik link berikut untuk reset password Anda: https://vpn.yourdomain.com/reset-password",
    // html: "<b>Klik link berikut untuk reset password Anda: ...</b>"
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Instruksi reset password telah dikirim ke email Anda." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Gagal mengirim email." });
  }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 