<<<<<<< HEAD
const profileDataArgs = process.argv.slice(2);
=======
//Section 1
const fs = require('fs');
>>>>>>> feature/generate-webpage

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

//Section 2
