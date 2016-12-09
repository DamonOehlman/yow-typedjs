const s = require('shazam/slide');
const fs = require('fs');
const crel = require('crel');

require('shazam')({
  title: 'Typed JS',
  theme: require('bespoke-theme-tweakable')({
    headerFont: 'Josefin Sans',
    displayFont: 'Open Sans'
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
    require('./deck/demo'),
    s.md(require('./deck/flow.md')),
    // require('./deck/getting-strict-intro'),
    // s.md(require('./deck/strict-options.md')),
    require('./deck/typed-js-caveats'),
    s.md(require('./deck/typed-js-caveats-examples.md')),
    s.md(require('./deck/comparisons.md')),
    require('./deck/recommendations'),
    require('./deck/thanks-and-questions')
  ]
});
