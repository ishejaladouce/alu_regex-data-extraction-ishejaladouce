// import html tags regex
const { htmlTags } = require('../src/regexPatterns');

// Sample inputs
const samples = [
  '<p>This is a paragraph</p>',
  '<div class="example">Content</div>',
  '<img src="image.jpg" alt="description">',
  'No tags here'
];

// Run tests
samples.forEach(str => {
  console.log('Input:', str);
  console.log('Matches:', str.match(htmlTags) || []);
  console.log('---');
});
