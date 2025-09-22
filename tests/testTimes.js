// import the time regex
const { time } = require('../src/regexPatterns');

// Sample inputs
const samples = [
  'Meeting at 14:30',
  'Wake up at 2:30 PM',
  'Alarm: 12:00 am',
  'Invalid: 25:00 should not match'
];

// Run tests
samples.forEach(str => {
  console.log('Input:', str);
  console.log('Matches:', str.match(time) || []);
  console.log('---');
});
