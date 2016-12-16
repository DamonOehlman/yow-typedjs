class ExtendsTestFoo {
  private readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class ExtendsTestBar extends Foo {
}

new ExtendsTestFoo('1');
new ExtendsTestFoo(1);
new ExtendsTestBar('1');
new ExtendsTestBar(1);
