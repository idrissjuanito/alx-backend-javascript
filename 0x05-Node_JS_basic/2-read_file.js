#!/usr/bin/env node
const fs = require('fs');

process.on('uncaughtException', (err) => {
  throw new Error('Cannot load the database');
});

function countStudents(path) {
  const content = fs.readFileSync(path, 'utf-8');
  let studentCount = 0;
  let line = '';
  const studentsByField = {};
  for (let i = 0; i < content.length; i += 1) {
    if (content[i] !== '\n') {
      line += content[i];
      continue;
    }
    studentCount += 1;
    if (studentCount < 2) {
      line = '';
      continue;
    }
    const studentData = line.split(',');
    const field = studentData[studentData.length - 1];
    const fields = Object.keys(studentsByField);
    if (fields.includes(field)) {
      studentsByField[field].push(studentData[0]);
    } else {
      studentsByField[field] = [studentData[0]];
    }
    line = '';
  }
  console.log('Number of students:', studentCount -= 1);

  for (const [key, value] of Object.entries(studentsByField)) {
    console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
  }
}

countStudents('database.csv');
module.exports = countStudents;
