# Closure Compiler

[https://developers.google.com/closure/compiler/](https://developers.google.com/closure/compiler/)

- First public release: [November 2009](http://googlecode.blogspot.com.au/2009/11/introducing-closure-tools.html)
- Type definitions are expressed in [JSDoc](http://usejsdoc.org/) style comments.
- Built with Java
- Commonly used as a JS compressor (prior to tools like Uglify).
- Designed to work seamlessly with the [Closure Library](https://developers.google.com/closure/library/docs/gettingstarted).
- TIL: Some inline type syntax valid for ES6 classes.

:::

## Pros

- All in one solution, combining a static type checker + cross compiler (e.g. ES6 ⇾ ES5).
- Compiler with advanced optimizations enabled is pretty amazing.
- Very mature project with the ability to apply very strict typing.
- Can be added incrementally to a project (with reports of type coverage).

:::

## Cons

- Providing explicit type information requires quite verbose syntax.
- Type inference technique is changing (OTI vs NTI).
- Limited externs definitions for JS libraries available.
- Compiler with advanced optimizations enabled can be hard to debug.
- Not _quite_ at the "cutting edge" anymore (but still in active development).

:::

# TypeScript

[https://www.typescriptlang.org/](https://www.typescriptlang.org/)

- Initial release: [October 2012](https://channel9.msdn.com/posts/Anders-Hejlsberg-Introducing-TypeScript)
- Types defined inline with code, with [some JSDoc annotations supported](https://github.com/Microsoft/TypeScript/wiki/JSDoc-support-in-JavaScript).
- Built with TypeScript
- Probably the most OO centric of the languages.

:::

## Pros

- Great editor integration (VS code is probably the best free option).
- Very active community around TypeScript (best of all three options).
- Largest number of 3rd party library type definitions, see: [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)
- Nice, terse syntax for adding type information
- Can easily strengthen type checking with configuration settings.

:::

## Cons

- Some weird language features (e.g. interfaces extending classes).
- Mappings from TypeScript → JS are a bit opaque.
- Less "opt-in" than the other tools.

:::

# Flow

[https://flowtype.org/](https://flowtype.org/)

- Initial release: [November 2014](https://code.facebook.com/posts/1505962329687926/flow-a-new-static-type-checker-for-javascript/)
- Types defined inline with code (as per TypeScript).
- Built with OCaml.
- Not a compiler, but a static type checker.

:::

## Pros

- Solid editor integration (Atom, VSCode, etc).
- Types defined as not nullable by default.
- Doesn't go over the top with language features.
- Doesn't force you into either OO or FP.
- Plays nice with other tools.
- Developed with OCaml (very personal opinion here).

:::

## Cons

- Permits weak type validation (`any` types are not type checker errors), but:
  1. Can be supplemented with eslint rules
  2. Type coverage tools are fantastic and supplement guards when falling back to `any` types.

- Setting up a development environment is an adventure in tool chains (eslint, babel, etc).
- Still under heavy development (features like `$Keys()` is unstable).
