const readDatabase = require('../utils');

const DATABASE = process.argv[2];
class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const students = await readDatabase(DATABASE);
      let result = 'This is the list of our students';
      const fields = Object.keys(students);
      fields.sort();
      fields.forEach((key) => {
        const value = students[key];
        result += `\nNumber of students in ${key}: ${value.length}. List: ${value.join(', ')}`;
      });
      response.status(200).send(result);
    } catch (e) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (!['CS', 'SWE'].includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const students = await readDatabase(DATABASE);
      response.status(200).send(`List: ${students[major].join(', ')}`);
    } catch (e) {
      response.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
