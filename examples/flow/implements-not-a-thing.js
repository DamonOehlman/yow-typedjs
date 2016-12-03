// @flow
interface Foo {
  configure(opts: { name: string }): void;
}

class Bar implements Foo {
  configure(opts: { name: string }): void {
  }
}