const s = require('./');
const crel = require('crel');
const fs = require('fs');
const icon = require('./icon');

module.exports = [
  s()
    .h1('Caveats')
    .h2('certain things take more effort')
    .h2('and other things are just plain ineffective'),
  // icon('browser', 'Dealing with the DOM'),
  // icon('serialization', 'I/O (Mainly input)'),
  // icon('libraries', '3rd party libraries'),
  // icon('lazy', 'Feeling too comfortable with type checking')
  s()
    .crel('div', { class: 'cc-image blurred' }, [
      crel('img', { src: 'images/netscape.jpg' })
    ])
    .h1('Dealing with the Browser')
    .data('ccUrl', 'https://www.flickr.com/photos/caseorganic/4671164940/')
    .data('ccAuthor', 'Amber Case'),

  s()
    .crel('div', { class: 'cc-image blurred' }, [
      crel('img', { src: 'images/connectors.jpg' })
    ])
    .h1('I/O (Mainly input)')
    .data('ccUrl', 'https://www.flickr.com/photos/dullhunk/7277528920/')
    .data('ccAuthor', 'Duncan Hull'),

  s()
    .crel('div', { class: 'cc-image blurred' }, [
      crel('img', { src: 'images/books.jpg' })
    ])
    .h1('3rd Party Libraries'),

  s()
    .crel('div', { class: 'cc-image blurred' }, [
      crel('img', { src: 'images/hammock.jpg' })
    ])
    .h1('Feeling too comfortable with type checking')
];
