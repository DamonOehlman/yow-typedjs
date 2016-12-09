const s = require('./');
const crel = require('crel');
const fs = require('fs');
const icon = require('./icon');

module.exports = [
  s()
    .crel('div', { class: 'cc-image' }, [
      crel('img', { src: 'images/crow.jpg' })
    ])
    .data('ccUrl', 'https://www.flickr.com/photos/andymorffew/15416664190/')
    .data('ccAuthor', 'Andy Morffew'),

  // icon('opinion', 'Opinions / Recommendations'),
  s()
    .h1('Thanks')
    .crel('ul', { class: 'resources' }, [
      crel('li', crel('div', [
        crel('label', 'Slides: '),
          crel('a', {
          href: 'https://damonoehlman.github.io/yow-typedjs/'
        }, 'https://damonoehlman.github.io/yow-typedjs/' )
      ])),
      crel('li', crel('div', [
        crel('label', 'Sample Project: '),
          crel('a', {
          href: 'https://github.io/DamonOehlman/yow-typedjs/'
        }, 'https://github.io/DamonOehlman/yow-typedjs/' )
      ])),
      crel('li', crel('div', [
        crel('label', 'Twitter: '),
          crel('a', {
          href: 'https://twitter.com/DamonOehlman/'
        }, '@DamonOehlman' )
      ])),
    ])

  // s()
  //   .h1('More ')
  //   .img('images/filament.jpg')
  //   .addClass('cc-image')
  //   .data('cc-url', 'https://www.flickr.com/photos/creative_tools/15463102497/')
  //   .data('cc-author', 'Creative Tools')
];
