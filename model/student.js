var mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
  name: String,
  age: String,
  year: String,
  quote: String,
  info: String,
  photo: String
});

module.exports = mongoose("Student", studentSchema);

