var mongoose = require('mongoose');
var databaseUrl = 'mongodb://localhost:27017/students';
mongoose.connect(databaseUrl);

var Student = require('../models/student');

var students = [
  {
    firstName: "Kwakes",
    lastName: "Prempeh",
    age: "33",
    year: "WDI 16",
    quote: "No idea is original",
    info: "kwakes@me.com",
    photo: "http://2dopeboyz.com/wp-content/uploads/2014/06/2pac-6.jpg"
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