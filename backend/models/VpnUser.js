const mongoose = require('mongoose');

const vpnUserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    nama: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mika: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    unitKerja: {
        type: String,
        required: true
    },
    itopRequest: {
        type: String,
        required: true
    },
    hostname: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('VpnUser', vpnUserSchema); 