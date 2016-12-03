const s = require('./');
const crel = require('crel');
const fs = require('fs');
const icon = require('./icon');

module.exports = [
  s()
    .h1('Why Typed JS?')
    .h2('is it worth it the hassle?'),
  // s()
  //   .h1('YES')
  //   .h2('but it does take some work...'),
  s().h1('Let\'s talk features'),
  icon('shield', 'null (and undefined) Safety'),
  icon('typesys', 'type system constructs'),
  // icon('compiler', '"Compile time" type checks'),
  icon('nan', 'Some protection against type coercion'),
  icon('inference', 'Some type inference'),
  s()
    .h1('Let\'s talk tools')
];