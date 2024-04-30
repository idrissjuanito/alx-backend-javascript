#!/usr/bin/env node
const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) throw new Error('Cannot load the database');
  const content = fs.readFileSync(path, 'utf-8');
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
  console.log('Number of students:', studentCount -= 1);

  for (const [key, value] of Object.entries(studentsByField)) {
    console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
  }
}

module.exports = countStudents;
