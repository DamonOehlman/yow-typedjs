const s = require('./');
const crel = require('crel');
const fs = require('fs');
const icon = require('./icon');

module.exports = [
  s().h1('Well... How did I get here?'),
  s()
    .crel('div', { class: 'cc-image blurred' }, [
      crel('img', { src: 'images/plasticine.jpg' })
    ])
    .h1('For the last five years...')
    .ul([
      'Cross platform mobile geospatial apps (JavaScript)',
      'A lot of server-side Node.JS work (JavaScript)',
      'WebRTC development (JavaScript)'
    ])
    .data('ccUrl', 'https://www.flickr.com/photos/vaghinakpetrosyan/9569123324/')
    .data('ccAuthor', 'Vaghinak Petrosyan'),

  s()
    .crel('div', { class: 'cc-image' }, [
      crel('img', { src: 'images/bridge.jpg' })
    ])
    .h1('Before that...')
    .ul([
      'Delphi & a little C++ (Windows)',
      'Snuck in a bit of Perl (Web)',
      'Delphi (Windows)',
      'ColdFusion & JavaScript (Web)',
      '.NET & JavaScript (Web)'
    ])
    .data('ccUrl', 'https://www.flickr.com/photos/133074113@N08/27257009413/')
    .data('ccAuthor', 'David Meurin'),

  s()
    .crel('div', { class: 'cc-image' }, [
      crel('img', { src: 'images/disgust.jpg' })
    ]),

  icon('canva', 'then...'),

  s()
    .crel('div', { class: 'cc-image' }, [
      crel('img', { src: 'images/joy.jpg' })
    ]),
];
