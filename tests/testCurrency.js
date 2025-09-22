// tests/testCurrency.js
const { currency } = require('../src/regexPatterns');

// Sample inputs
const samples = [
  'Price: $19.99',
  'Total: $1,234.56',
  'Cheap: $5',
  'Broken: 123.45 should not match'
];

// Run tests
samples.forEach(str => {
  console.log('Input:', str);
  console.log('Matches:', str.match(currency) || []);
  console.log('---');
});
