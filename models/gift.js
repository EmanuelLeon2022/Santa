const mongoose = require('mongoose');

const giftSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    item:  { type: String, required: true },
    sure: Boolean
});

const Gift = mongoose.model('Gift', giftSchema);

module.exports = Gift;