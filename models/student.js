var mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  age: String,
  year: String,
  quote: String,
  info: String,
  photo: String
});

module.exports = mongoose.model("Student", studentSchema);

