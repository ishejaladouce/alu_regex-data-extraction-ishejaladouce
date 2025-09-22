// tests/testPhones.js
const { phone } = require('../src/regexPatterns');

// Sample inputs
const samples = [
  'Call me at (123) 456-7890',
  'Office: 123-456-7890',
  'Mobile: 123.456.7890',
  'Broken: 1234567890 should not match'
];

// Run tests
samples.forEach(str => {
  console.log('Input:', str);
  console.log('Matches:', str.match(phone) || []);
  console.log('---');
});
