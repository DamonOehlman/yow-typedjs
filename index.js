const s = require('shazam/slide');
const fs = require('fs');

require('shazam')({
  title: 'A simple presentation system',
  theme: require('bespoke-theme-tweakable')({
    headerFont: 'Josefin Sans',
    displayFont: 'Open Sans',
    codeFont: 'Fira Mono'
  }),
  plugins: [
    require('bespoke-bullets')('pre')
  ],
  styles: [
    fs.readFileSync(__dirname + '/css/icons.css', 'utf8'),
    fs.readFileSync(__dirname + '/css/code.css', 'utf8'),
    fs.readFileSync(__dirname + '/css/deck.css', 'utf8')
  ],
  slides: [
    // s.md(require('./deck/intro.md')),
    require('./deck/intro'),
    require('./deck/background'),
    require('./deck/typed-js-overview'),
    s.md(require('./deck/closure-compiler.md')),
    s.md(require('./deck/typescript.md')),
    s({ class: 'flowdemo' })
      .h1('Demo Time')
      .crel('img', { src: 'images/flow-logo.png' })
      .h1('❂‿❂'),
    // s.md(require('./deck/flow.md')),
    // require('./deck/getting-strict-intro'),
    // s.md(require('./deck/strict-options.md')),
    require('./deck/typed-js-caveats'),
    s.md(require('./deck/typed-js-caveats-examples.md')),
    s.md(require('./deck/comparisons.md')),
    require('./deck/thanks-and-questions')
  ]
});
