const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
  name: String,
  email: String,
  modelName: String,
  imageUrl: String,
  description: String,
  modelLink: String,
});

const Model = mongoose.model('Model', modelSchema);

module.exports = Model;