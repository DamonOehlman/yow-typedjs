const s = require('./');
const crel = require('crel');
const fs = require('fs');
const icon = require('./icon');

module.exports = [
  s().h1('Recommendations'),
  s()
    .crel('div', { class: 'cc-image' }, [
      crel('img', { src: 'images/beef-up.jpg' })
    ])
    .h1('Beef up restrictions'),
  s.md(require('./strict-options.md')),
  s()
    .crel('div', { class: 'cc-image' }, [
      crel('img', { src: 'images/explore.jpg' })
    ])
    .h1('Explore'),
];
