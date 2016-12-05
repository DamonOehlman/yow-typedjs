## Closure Compiler

- First public release: [November 2009](http://googlecode.blogspot.com.au/2009/11/introducing-closure-tools.html)
- Type definitions are expressed in [JSDoc](http://usejsdoc.org/) style comments.
- Built with Java
- Commonly used as a JS compressor (prior to tools like Uglify).
- Designed to work seamlessly with the [Closure Library](https://developers.google.com/closure/library/docs/gettingstarted).
- TIL: Some inline type syntax valid for ES6 classes.

## Pros

- All in one solution, combining a static type checker + cross compiler (e.g. ES6 ⇾ ES5).
- Compiler with advanced optimizations enabled is pretty amazing.
- Very mature project with the ability to apply very strict typing.
- Can be added incrementally to a project (with reports of type coverage)

:::

## Cons

- Providing explicit type information requires quite verbose syntax.
- Type inference is in flux
- Limited externs definitions for JS libraries available.
- Compiler with advanced optimizations enabled can be hard to get your head around.
- Some of the cool tricks that newer type checkers aren't implemented in cc.
- Not _quite_ at the "cutting edge" anymore (but still in active development).

:::

## TypeScript

- Initial release: [Octoboer 2012](https://channel9.msdn.com/posts/Anders-Hejlsberg-Introducing-TypeScript)
- Types defined inline with code, with [some JSDoc annotations supported](https://github.com/Microsoft/TypeScript/wiki/JSDoc-support-in-JavaScript).
- Built with TypeScript
- By far the most OO centric of the languages.

:::

## Pros

- Great editor integration (obviously VS code is probably best)
- Solid community around TypeScript
- Largest number of 3rd party library type definitions, see: [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)
- Fairly terse syntax for adding type information

:::

## Cons

- Weak type enforcement by default (but fairly easy to make strict)
- Some weird language features (e.g. interfaces extending classes)
- Mappings from TypeScript → JS are a bit opaque

:::

## Flow

- Initial release: [November 2014](https://code.facebook.com/posts/1505962329687926/flow-a-new-static-type-checker-for-javascript/)
- Types defined inline with code
- Built with OCaml
- Classes are nominally typed, Interfaces are structurally typed
- Not a compiler, but a static type checker

:::

## Pros

- Very solid editor integration (Atom, VSCode, etc)
- Types defined as not nullable by default.
- Doesn't go over the top with language features.
- Doesn't force you into either OO or FP

:::

## Cons

- Some very weak validation in parts (can be supplmented with eslint rules)
- Setting up a development environment is an adventure in tool chains
- Still under heavy development

:::

# What did I like best?
