const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const homeRouter = express.Router();
homeRouter.get('/', AppController.getHomepage);
homeRouter.get('/students', StudentsController.getAllStudents);
homeRouter.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = homeRouter;
