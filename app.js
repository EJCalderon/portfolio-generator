//Section 1
const fs = require('fs');
const generatePage = require('./src/page-template');


const profileDataArgs = process.argv.slice(2);

console.log(profileDataArgs);

const [name, github] = profileDataArgs;

console.log();

const pageHtml = generatePage(name, github);

fs.writeFile('./index.html', pageHtml, err => {
    if (err) throw err;
    console.log('Portfolio complete! Checkout index.html to see the output!');
    
});

//Section 2
