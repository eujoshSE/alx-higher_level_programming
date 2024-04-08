#!/usr/bin/node
const count = process.argv.length;
console.log(count === 2 ? 'No argument' : count === 3 ? 'Best Argument found' : 'Best School Arguments found');
