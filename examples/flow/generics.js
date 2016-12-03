// @flow
class List<T> {
  items: Array<T>;

  constructor(items: Array<T>) {
    this.items = items;
  }

  immutableSort(comparator: (a: T, b: T) => number): Array<T> {
    return this.items.slice(0).sort(comparator);
  }
}

class Foo {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  static compare(a: Foo, b: Foo): number {
    return a.value.localeCompare(b.value);
  }
}

const list: List<Foo> = new List([ new Foo('b'), new Foo('a') ]);
console.log(list.immutableSort(Foo.compare));

const list: List = new List([ new Foo('b'), new Foo('a'), 'hello' ]);
console.log(list.immutableSort(Foo.compare));

const list: List<Foo | string> = new List([ new Foo('b'), new Foo('a'), 'hello' ]);
console.log(list.sort(Foo.compare));
