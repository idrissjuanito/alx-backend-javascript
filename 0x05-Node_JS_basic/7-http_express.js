const express = require('express');
const fs = require('fs/promises');

const app = express();

async function countStudents(path) {
  try {
    const content = await fs.readFile(path, 'utf-8');
    let studentCount = 0;
    let line = '';
    const studentsByField = {};
    for (let i = 0; i < content.length; i += 1) {
      if (content[i] === '\n') {
        if (line.length > 1) {
          studentCount += 1;
          if (studentCount > 1) {
            const studentData = line.split(',');
            const field = studentData[studentData.length - 1];
            const fields = Object.keys(studentsByField);
            if (fields.includes(field)) {
              studentsByField[field].push(studentData[0]);
            } else {
              studentsByField[field] = [studentData[0]];
            }
          }
          line = '';
        }
      } else {
        line += content[i];
      }
    }
    if (studentCount < 1) return '';
    studentCount -= 1;
    let result = `Number of students: ${studentCount}`;

    for (const [key, value] of Object.entries(studentsByField)) {
      result += `\nNumber of students in ${key}: ${value.length}. List: ${value.join(', ')}`;
    }
    return result;
  } catch (e) {
    return 'Cannot load the database';
  }
}
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const students = await countStudents(process.argv[2]);
  res.end(`This is the list of our students\n${students}`);
});
app.listen(1245);
module.exports = app;
