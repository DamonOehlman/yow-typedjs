/**
 * @template T
 */
class List {
  /**
   * @param {!Array<T>} items
   */
  constructor(items) {
    this.items = items;
  }

  /**
   * @param {!function(T,T):number} comparator
   * @return {!Array<T>}
   */
  immutableSort(comparator) {
    return this.items.slice(0).sort(comparator);
  }
}

class Foo {
  /**
   * @param {string} value
   */
  constructor(value) {
    this.value = value;
  }
}

/**
 * @param {!Foo} a
 * @param {!Foo} b
 * @return number
 */
function sortFoos(a, b) {
  return a.value.localeCompare(b.value);
}

/**
 * @type {!List<!Foo>}
 */
const listA = new List([ new Foo('b'), new Foo('a') ]);
console.log(listA.immutableSort(sortFoos));

/**
 * @type {!List<Foo>}
 */
const listB = new List([ new Foo('b'), new Foo('a') ]);
console.log(listB.immutableSort(sortNumbers));

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function sortNumbers(a, b) {
  return a - b;
}