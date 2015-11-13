var express = require('express');
var router = express.Router();

var studentsController = require('../controllers/studentsController');

router.route('/students')
  .get(studentsController.studentsIndex)
  .post(studentsController.studentsCreate)

router.route('/students/new')
  .get(studentsController.studentsNew)

router.route('/students/:id/edit')
  .get(studentsController.studentsEdit)

router.route('/students/:id')
  .get(studentsController.studentsShow)
  .patch(studentsController.studentsUpdate)
  .delete(studentsController.studentsDelete)

module.exports = router;
