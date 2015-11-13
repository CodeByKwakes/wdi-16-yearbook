var Student = require('../models/student');

function candiesIndex(req, res){
  Student.find({}, function(err, students){
    if (err) return res.render('error', { message: "Wrong! You have been expelled!!!" + err });
    res.render('students/index', { students: students });
  });
}

function studentsShow(req, res){
  Student.findById({ _id: req.params.id }, function(err, student){
    if (err) return res.render('error', { message: "Wrong!!! You have been expelled!!!" + err });
    res.render('students/show', { student: student });
  });
}

function studentsCreate(req, res){
  var studentParams = req.body.student
  var student = new Student(studentParams)
  student.save(function(err){
    if (err) return res.render('error', { message: "Wrong!!! You have been expelled!!!" + err });
    return res.redirect('/students');
  })
}

function studentsNew(req, res){
  res.render('students/new')
}

function studentsEdit(req, res){
  Student.findById({ _id: req.params.id }, function(err, student){
    if (err) return res.render('error', { message: "Wrong!!! You have been expelled!!!" + err });
    res.render('students/edit', { student: student });
  });
}

function studentsUpdate(req, res){
  var id = req.params.id;
  var studentParams = req.body.student;

  Student.findByIdAndUpdate({ _id: id }, studentParams, function(err, student) {
    if (err) return res.render("error", { message: "Wrong! You have been expelled!!!" + err });
    res.redirect('/students');
  })
}

function studentsDelete(req, res){
  var id = req.params.id;
  Student.remove({_id: id}, function(err){
    if (err) return res.render("error", { message: "Wrong! You have been expelled!!!" + err });
    res.redirect('/students');
  })
}

module.exports = {
  studentsIndex: studentsIndex,
  studentsCreate: studentsCreate,
  studentsShow: studentsShow,
  studentsUpdate: studentsUpdate,
  studentsDelete: studentsDelete,
  studentsNew: studentsNew,
  studentsEdit: studentsEdit
}