// getting file name from a given path

// const path = require("path");

// console.log(path.basename('/Users/Student/Documents/node_workshop/basicExample/NodeDayOne/index.js'));




// Get the operating system's architecture

// const os = require('os');
// const architecture = os.arch();
// console.log("Architecture:", architecture); 


// Write to a file
const fs = require('fs');
fs.writeFile('new_file.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log('File created and data written successfully!');
  });