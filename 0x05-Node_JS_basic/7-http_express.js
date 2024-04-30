const express = require('express');
const countStudents = require('./');
const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
    const students = await countStudents(process.argv[2]);
    res.end(`This is the list of our students\n${students}`);
  }
  
});
app.listen(1245);
module.exports = app;
