// middleware/getItem.js
const InventoryItem = require('../models/InventoryItem');

async function getItem(req, res, next) {
  let item;
  try {
    item = await InventoryItem.findById(req.params.id);
    if (item == null) {
      return res.status(404).json({ message: 'Cannot find item' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.item = item;
  next();
}

module.exports = getItem;