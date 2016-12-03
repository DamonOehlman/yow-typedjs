export class Foo {
  private readonly title: string;
  private readonly viewFactory: (opts: FooViewOpts) => FooView;

  constructor(opts: { title: string, viewFactory: (viewOpts: FooViewOpts) => FooView }) {
    this.title = opts.title;
    this.viewFactory = opts.viewFactory;
  }

  protected createView(): FooView {
    return this.viewFactory({ title: this.title });
  }
}

export class Bar extends Foo {
  public createAndDisplayView(): void {
    return this.createView().display();
  }
}

export class FooView {
  private readonly title: string;

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
  title: 'test',
  viewFactory: function(opts) {
    return new FooView(opts.title);
  }
})