//where the entry point is, it will be app.js file inside
//the src folder. we also have to tell where the output bundle file, which will allow us to run webpack successfully.

//property which is an object, webpack is going to grab this 
//one and run it
const path = require('path');
console.log();

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
};

