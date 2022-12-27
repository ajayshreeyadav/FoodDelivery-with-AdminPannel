const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  size: { type: String, required: true },
  price: { type: Number, required: true },
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
