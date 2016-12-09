const s = require('./');
const crel = require('crel');

module.exports = [
  s()
    .crel('div', { class: 'cc-image blurred' }, [
      crel('img', { src: 'images/demo-time.jpg' })
    ])
    .h1('Demo Time')
    .crel('a', {
      href: 'https://github.com/DamonOehlman/typed-github-demo'
    }, 'https://github.com/DamonOehlman/typed-github-demo')
];
