const s = require('./');
const crel = require('crel');
const fs = require('fs');
const icon = require('./icon');

module.exports = [
  s().h1('Well... How did I get here?'),
  // s().ul([
  //   'Started development in a typed environment (C++, Delphi, C#)',
  //   'Worked across both dynamic (JS) and statically typed languages until 2010.',
  //   'From 2010 moved across to working with JS fulltime.',
  //   'Embraced that environment.',
  //   'Worked in quite a few client-side & node.js roles and projects'
  // ]),

  // s()
  //   .crel('div', { class: 'cc-image blurred' }, [
  //     crel('img', { src: 'images/steel_structure.jpg' })
  //   ])
  //   .h2('from')
  //   .h1('Rigid and Boring?')
  //   .data('ccUrl', 'https://www.flickr.com/photos/matsuyuki/19146478275/')
  //   .data('ccAuthor', 'Toshiyuki IMAI'),

  s()
    .crel('div', { class: 'cc-image' }, [
      crel('img', { src: 'images/bridge.jpg' })
    ])
    .h1('First (10ish) years')
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
    .crel('div', { class: 'cc-image blurred' }, [
      crel('img', { src: 'images/plasticine.jpg' })
    ])
    .h1('Next (5ish) years')
    .ul([
      'Cross platform mobile geospatial apps (JavaScript)',
      'A lot of server-side Node.JS work (JavaScript)',
      'WebRTC development (JavaScript)'
    ])
    .data('ccUrl', 'https://www.flickr.com/photos/vaghinakpetrosyan/9569123324/')
    .data('ccAuthor', 'Vaghinak Petrosyan'),

  icon('canva', 'then...'),

  // s()
  //   .crel('div', { class: 'cc-image blurred' }, [
  //     crel('img', { src: 'images/filament.jpg' })
  //   ])
  //   .h2('back to...')
  //   .h1('A level of rigidity')
  //   .data('ccUrl', 'https://www.flickr.com/photos/vaghinakpetrosyan/9569123324/')
  //   .data('ccAuthor', 'Vaghinak Petrosyan'),

  // s()
  //   .crel('div', { class: 'cc-image' }, [
  //     crel('img', { src: 'images/confused.jpg' })
  //   ])
  //   .data('ccUrl', 'https://www.flickr.com/photos/mottram/78025602/')
  //   .data('ccAuthor', 'Jack Mottram'),
    
      // s()
  //   .h1('More ')
  //   .img('images/filament.jpg')
  //   .addClass('cc-image')
  //   .data('ccUrl', 'https://www.flickr.com/photos/creative_tools/15463102497/')
  //   .data('ccAuthor', 'Creative Tools')
];