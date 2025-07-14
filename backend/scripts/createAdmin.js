const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const UserLogin = require('../models/UserLogins');

const createAdmin = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect('mongodb://localhost:27018/vpn_users', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');

        // Check if admin already exists
        const existingAdmin = await UserLogin.findOne({ level: 'admin' });
        if (existingAdmin) {
            console.log('Admin user already exists');
            process.exit(0);
        }

        // Create admin user
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash('admin123', saltRounds);

        const adminUser = new UserLogin({
            username: 'admin',
            nama: 'Administrator',
            email: 'admin@mitrakeluarga.com',
            password: hashedPassword,
            level: 'admin'
        });

        await adminUser.save();
        console.log('Admin user created successfully');
        console.log('Username: admin');
        console.log('Password: admin123');
        console.log('Please change the password after first login');

    } catch (error) {
        console.error('Error creating admin:', error);
    } finally {
        await mongoose.disconnect();
        process.exit(0);
    }
};

createAdmin(); 