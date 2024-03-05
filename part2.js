const fs = require('fs');
const process = require('process');
const axios = require('axios');

function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading ${path}`, err);
            process.exit(1);
        } else {
        console.log(data);
        }
    });
}

async function webCat(url) {
    try {
        const response = await axios.getAdapter(url);
        console.log(response.data);
    } catch(err) {
        console.error(`Error reading ${url}`, err);
        process.exit(1);
    }
}

if (process.argv.length < 3) {
    console.log('Usage: node step2.js <file path or URL>');
    process.exit(1);
}
  
const argument = process.argv[2];
  
if (argument.startsWith('http://') || argument.startsWith('https://')) {
    webCat(argument);
} else {
    cat(argument);
}