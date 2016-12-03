// @flow
interface Foo {
  configure(opts: { name: string }): void;
}

function nameFoo(foo: Foo, name: string) {
  foo.configure({ name });
}

class Bar {
  configure(opts: { name: string }) {}
}

nameFoo(new Bar(), "bar");

nameFoo({ configure: function(opts: { name: string }) {} }, "anon");

/* failing cases
class BadBar {}
nameFoo(new BadBar(), "bad bar");

class OtherBadBar  {
  configure(opts: { name: number }) {}
}

nameFoo(new OtherBadBar(), "other bad bar");

nameFoo("test", "test");
*/
