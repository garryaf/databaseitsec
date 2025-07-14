const mongoose = require('mongoose');
const mikaSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }
});
module.exports = mongoose.model('Mika', mikaSchema);
