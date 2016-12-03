/**
 * @interface
 */
export class Foo {
  /**
   * @param {{
   *  name: string
   * }} opts
   */
  configure(opts) {}
}

/**
 * @implements {Foo}
 */
export class Bar {
  /**
   * @inheritDoc
   */
  configure(opts) {
    // ...
  }
}