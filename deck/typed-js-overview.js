const s = require('./');
const crel = require('crel');
const fs = require('fs');
const icon = require('./icon');

module.exports = [
  s()
    .crel('div', { class: 'cc-image' }, [
      crel('img', { src: 'images/city-map.jpg' })
    ])
    .h1('What are we covering?')
    .ul([
      'Brief intro to what typed JS is and why you\'d consider using it',
      'A whirlwind tour of Closure Compiler and TypeScript',
      'A play around with some flow code (the new kid on the block)',
      'Covering off some caveats',
      'Some personal opinions and recommendations'
    ]),
  s()
    .h1('Why Typed JS?'),
  s()
    .crel('div', { class: 'cc-image' }, [
      crel('img', { src: 'images/knights.jpg' })
    ])
    .h1('Guards')
    .data('ccUrl', 'https://www.flickr.com/photos/38446022@N00/8243227928/')
    .data('ccAuthor', 'Josh Wedin'),

  s()
    .crel('div', { class: 'cc-image blurred' }, [
      crel('img', { src: 'images/constructs.jpg' })
    ])
    .h1('Type System Constructs')
    .data('ccUrl', 'https://www.flickr.com/photos/38446022@N00/8243227928/')
    .data('ccAuthor', 'Chris Eason'),

  s()
    .crel('div', { class: 'cc-image' }, [
      crel('img', { src: 'images/chemistry.jpg' })
    ])
    .h1('Protection against type coercion')
    .data('ccUrl', 'https://www.flickr.com/photos/yuvi/2422215548/')
    .data('ccAuthor', 'Yuvi Panda'),

  s()
    .crel('div', { class: 'cc-image' }, [
      crel('img', { src: 'images/footprints.jpg' })
    ])
    .h1('Type inference')
    .data('ccUrl', 'https://www.flickr.com/photos/66176388@N00/16382841365/')
    .data('ccAuthor', 'Mark Robinson'),

  s()
    .crel('div', { class: 'cc-image blurred' }, [
      crel('img', { src: 'images/balloons.jpg' })
    ])
    .h1('Reduced Testing Weight')
    .data('ccUrl', 'https://www.flickr.com/photos/swamibu/2425212607/')
    .data('ccAuthor', 'Farrukh'),
];
