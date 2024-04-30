#!/usr/bin/env node
console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', () => {
  const answer = process.stdin.read();
  if (answer != null) process.stdout.write(`Your name is: ${answer.toString()}`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
