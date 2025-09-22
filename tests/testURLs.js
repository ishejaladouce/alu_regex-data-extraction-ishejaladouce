//tests/testURLs.js
const { url } = require('../src/regexPatterns');

//sample inputs 
const sample = [
    'Visit hhtps://www.example.com for info.',
    'Our page: https://subdomain.example.org/page is live.',
    'Broken: http//missing-colon.com should not match.',
    'Another: HTTPS://Example.com/path?query=1'
];

//Run tests
sample.forEach(str => {
    console.log('Input:', str);
    console.log('Matches:', str.match(url) || []);
    console.log('---');
});