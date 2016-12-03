const icons = new Map();
const fs = require('fs');
const s = require('shaz');
const crel = require('crel');

icons.set('json', fs.readFileSync(__dirname + '/../images/json_file.svg', 'utf8'));
icons.set('browser', fs.readFileSync(__dirname + '/../images/browser.svg', 'utf8'));
icons.set('serialization', fs.readFileSync(__dirname + '/../images/serialization.svg', 'utf8'));
icons.set('libraries', fs.readFileSync(__dirname + '/../images/external_libraries.svg', 'utf8'));
icons.set('shield', fs.readFileSync(__dirname + '/../images/shield.svg', 'utf8'));
icons.set('compiler', fs.readFileSync(__dirname + '/../images/compiler.svg', 'utf8'));
icons.set('nan', fs.readFileSync(__dirname + '/../images/nan.svg', 'utf8'));
// icons.set('typesys', fs.readFileSync(__dirname + '/../images/toolkit.svg', 'utf8'));
icons.set('typesys', fs.readFileSync(__dirname + '/../images/swiss_army_knife.svg', 'utf8'));
icons.set('inference', fs.readFileSync(__dirname + '/../images/quiz.svg', 'utf8'));
icons.set('canva', fs.readFileSync(__dirname + '/../images/canva.svg', 'utf8'));
icons.set('lazy', fs.readFileSync(__dirname + '/../images/lazy.svg', 'utf8'));
icons.set('opinion', fs.readFileSync(__dirname + '/../images/opinion.svg', 'utf8'));
icons.set('question', fs.readFileSync(__dirname + '/../images/question.svg', 'utf8'));

module.exports = (icon, title) => {
  const slide = s();

  if (title) {
    slide.h2(title);
  }

  if (icons.has(icon)) {
    return slide.html(icons.get(icon), { class: `icon ${icon}` });
  }

  return slide.div(`icon ${icon} not found`);
};