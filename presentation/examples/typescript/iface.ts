interface Foo {
  configure(opts: { name: string }): void;
}

class Bar implements Foo {
  configure(opts: { name: string }): void {
  }
}

/** ❗ failure cases
class BadBar implements Foo {
}

class OtherBadBar implements Foo {
  configure(opts: { name: number }): void {}
}
*/