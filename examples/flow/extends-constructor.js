// @flow
class Foo {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Bar extends Foo {
}

new Foo('1');
new Foo(1);
new Bar('1');
new Bar(1);
