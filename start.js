// Transpile all code following this line with babel and use '@babel/preset-env' (aka ES6) preset.
require('babel-core/register');
require('babel-polyfill');

// Import the rest of our application.
module.exports = require('./run.js');
