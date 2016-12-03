// @flow
export class Foo {
  title: string;
  viewFactory: (viewOpts: FooViewOpts) => FooView;

  constructor(opts: { title: string, viewFactory: (viewOpts: FooViewOpts) => FooView }) {
    this.title = opts.title;
    this.viewFactory = opts.viewFactory;
  }

  createView(): FooView {
    return this.viewFactory({ title: this.title });
  }
}

export class Bar extends Foo {
  createAndDisplayView(): void {
    return this.createView().display();
  }
}

export class FooView {
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  display() {
  }
}

interface FooViewOpts {
  title: string
}

const foo = new Foo({
  title: 'hello',
  viewFactory: function(opts: FooViewOpts): FooView {
    return new FooView(opts.title);
  }
});