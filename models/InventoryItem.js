const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventoryItemSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('InventoryItem', InventoryItemSchema);