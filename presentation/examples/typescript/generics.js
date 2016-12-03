class List {
    constructor(items) {
        this.items = items;
    }
    immutableSort(comparator) {
        return this.items.slice(0).sort(comparator);
    }
}
class Foo {
    constructor(value) {
        this.value = value;
    }
    static compare(a, b) {
        return a.value.localeCompare(b.value);
    }
}
const listA = new List([new Foo('b'), new Foo('a')]);
console.log(listA.immutableSort(Foo.compare));
const listB = new List([new Foo('b'), new Foo('a'), 'hello']);
console.log(listB.immutableSort(Foo.compare));
//# sourceMappingURL=generics.js.map