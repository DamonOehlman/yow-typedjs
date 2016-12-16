class ExtendsTestFoo {

  /**
   * @param {string} name
   */
  constructor(name) {
    /**
     * @const
     * @type {string}
     */
    this.name = name;
  }
}

class ExtendsTestBar extends ExtendsTestFoo {
}

new ExtendsTestFoo('1');
new ExtendsTestFoo(1);
new ExtendsTestBar('1');
new ExtendsTestBar(1);
