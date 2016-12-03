const s = require('./');
const crel = require('crel');
const fs = require('fs');
const icon = require('./icon');

module.exports = [
  s()
    .crel('div', { class: 'cc-image heavyblur' }, [
      crel('img', { src: 'images/strict.jpg' })
    ])
    .h1('Getting Strict')
    .data('ccUrl', 'https://www.flickr.com/photos/133074113@N08/27257009413/')
    .data('ccAuthor', 'David Meurin')
];