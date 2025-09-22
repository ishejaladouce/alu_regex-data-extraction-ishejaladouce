const { email } =  require('../src/regexPatterns');

// sample inputs to test the RegExp
const sample = [
    'Contact: username@example.com',
    'send to firstname.lastname@company.co.uk for details',
    'Broken: user@@example.com should not match.',
    'Another: user.name+tag@sub.example.org is valid'
];

// Run the test
sample.forEach(str => {
    console.log('Input:', str);
    console.log('Matches:', str.match(email) || []);
    console.log('---');

});