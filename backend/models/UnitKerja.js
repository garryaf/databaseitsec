const mongoose = require('mongoose');
const unitKerjaSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }
});
module.exports = mongoose.model('UnitKerja', unitKerjaSchema); 