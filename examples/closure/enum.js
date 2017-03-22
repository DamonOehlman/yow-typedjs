/** @enum {string} */
const SpinnerStyle = {
  STANDARD: 'STANDARD',
  FANCY: 'FANCY'
};

/**
 * @type {SpinnerStyle}
 */
let style = SpinnerStyle.STANDARD;
if (style === 'TEST') {
  console.log('is test');
}

