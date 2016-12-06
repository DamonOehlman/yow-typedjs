class List<T> {
  items: Array<T>;

  constructor(items: Array<T>) {
    this.items = items;
  }

  immutableSort(comparator: (a: T, b: T) => number): List<T> {
    return new List(this.items.slice(0).sort(comparator));
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

const listA: List<Foo> = new List([ new Foo('b'), new Foo('a') ]);
console.log(listA.immutableSort(Foo.compare));

const listB: List<Foo> = new List([ new Foo('b'), new Foo('a'), 'hello' ]);
console.log(listB.immutableSort(Foo.compare));
