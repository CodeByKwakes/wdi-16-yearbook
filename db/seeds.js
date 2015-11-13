var mongoose = require('mongoose');
var databaseUrl = 'mongodb://localhost:27017/students';
mongoose.connect(databaseUrl);

var Student = require('../models/student');

var students = [
  {
    firstName: "Kwakes",
    lastName: "Prempeh",
    age: "30",
    year: "WDI 16",
    quote: "No idea is original",
    info: "kwakes@me.com",
    photo: "https://drive.google.com/open?id=0B4SAri4crq9_NWVNdGtQQmstdGs"
  }
]

function saveToDb(err, student){
  if(err) console.log(err)
  console.log("Student saved " + student)
}

students.forEach(function(student, index){
  var newStudent = new Student(student);
  newStudent.save(saveToDb);
});