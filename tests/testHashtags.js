//import the hashtag  regex
const { hashtags } = require('../src/regexPatterns');

// Sample inputs
const samples = [
  '#example',
  '#ThisIsAHashtag',
  'No hashtag here',
  'Mixed #123test'
];

// Run tests
samples.forEach(str => {
  console.log('Input:', str);
  console.log('Matches:', str.match(hashtags) || []);
  console.log('---');
});
