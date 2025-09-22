// inmport the CreditCards regex
const { creditCard } = require('../src/regexPatterns');

// Sample inputs
const sample = [
  'Card: 1234 5678 9012 3456',
  'Backup: 1234-5678-9012-3456',
  'Broken: 1234567890123456 should not match',
  'Another: 4321-8765-2109-6543 is valid'
];

// Run tests
sample.forEach(str => {
  console.log('Input:', str);
  console.log('Matches:', str.match(creditCard) || []);
  console.log('---');
});
