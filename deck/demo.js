const s = require('./');
const crel = require('crel');

module.exports = [
  s()
    .crel('div', { class: 'cc-image blurred' }, [
      crel('img', { src: 'images/demo-time.jpg' })
    ])
    .h1('Demo Time')
];
