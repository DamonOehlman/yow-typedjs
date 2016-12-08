const s = require('./');
const crel = require('crel');
const fs = require('fs');
const icon = require('./icon');

module.exports = [
  s().h1('The past present and future of typed JS (or ECMAScript)'),
  s({ class: 'typedjs-users' })
    .crel('div', { class: 'cc-image blurred' }, [
      crel('img', { src: 'images/audience.jpg' })
    ])
    .crel('a', { href: 'http://bit.ly/typedjs-users' }, 'http://bit.ly/typedjs-users')
];
