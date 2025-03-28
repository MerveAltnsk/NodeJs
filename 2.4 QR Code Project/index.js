/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';

var qr = require('qr-image');


// Get user input and save it to a text file
inquirer
  .prompt([
    {
      message: "Type in your URL",
      name: "userInput",
    }
    
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.userInput;
    var qr_svg = qr.image(userInput);
    qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



// Save user input to a text file
const fs = require('fs');


fs.writeFile('input.txt', userInput, (err) => {
  if (err) throw err;
  console.log('Input file has been saved!');
});
