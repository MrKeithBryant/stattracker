const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  name: String,
  date: [String],
  duration: [String]
});

const Active = mongoose.model('Active', activitySchema);
module.exports = Active;
