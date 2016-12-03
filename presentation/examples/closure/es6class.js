export class Foo {
  /**
   * @param {{
   *  title: string,
   *  viewFactory: function(!FooViewOpts):!FooView 
   * }} opts
   */
  constructor(opts) {
    /**
     * @private
     * @type {string}
     */
    this.title = opts.title;

    // ...
  }
}

export class FooView {
  /**
   * @param {!FooViewOpts} opts
   */
  constructor(opts) {
  }
}

/**
 * @typedef {{
 *  color: !Color,
 *  showMask: boolean,
 *  spinnerStyle: SpinnerStyle
 * }}
 */
let FooViewOpts;

/**
 * @typedef {{
 *  r: number,
 *  g: number,
 *  b: number,
 *  alpha: (number|undefined)
 * }}
 */
let Color;

/** @enum {string} */
const SpinnerStyle = {
  STANDARD: 'STANDARD',
  FANCY: 'FANCY'
};

const foo = new Foo({
  title: 'Hello World',
  viewFactory: createFooView
})

/**
 * @param {!FooViewOpts} opts
 */
function createFooView(opts) {
  return new FooView(opts);
}

/**
 * @param {!SpinnerStyle} spinnerStyle
 * @return {!Spinner}
 */
function createSpinner(spinnerStyle) {
  return new Spinner({ style: spinnerStyle });
}

const spinner = createSpinner(SpinnerStyle.FANCY);

class Spinner {
  /**
   * @param {{
   *  style: SpinnerStyle
   * }} opts
   */
  constructor(opts) {
    /**
     * @const
     */
    this.style = opts.style;
  }
}