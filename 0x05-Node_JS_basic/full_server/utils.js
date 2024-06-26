const fs = require('fs');

async function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, content) => {
      if (error) return reject(error);
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
      return resolve(studentsByField);
    });
  });
}

module.exports = readDatabase;
