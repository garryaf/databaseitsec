const mongoose = require('mongoose');

const userLoginSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // hash
    level: { type: String, required: true, default: 'user' } // opsional: admin/user
}, { timestamps: true });

module.exports = mongoose.model('UserLogin', userLoginSchema);
