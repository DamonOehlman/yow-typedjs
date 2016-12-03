const s = require('./');
const crel = require('crel');
const fs = require('fs');
const icon = require('./icon');

module.exports = [
  s()
    .h1('Caveats')
    .h2('certain things take more effort')
    .h2('and other things are just plain ineffective'),
  icon('browser', 'Dealing with the DOM'),
  icon('serialization', 'I/O (Mainly input'),
  icon('libraries', '3rd party libraries'),
  icon('lazy', 'Feeling too comfortable with type checking')
];