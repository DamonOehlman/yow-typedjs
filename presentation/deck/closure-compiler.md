# Closure Compiler

:::

## Overview

- First public release: [November 2009](http://googlecode.blogspot.com.au/2009/11/introducing-closure-tools.html)
- Type definitions are expressed in [JSDoc](http://usejsdoc.org/) style comments.
- Built with Java
- Commonly used as a JS compressor (prior to tools like Uglify).
- Designed to work seamlessly with the [Closure Library](https://developers.google.com/closure/library/docs/gettingstarted).
- TIL: Some inline type syntax valid for ES6 classes.

:::

## ES6 Class Example

<<< ../examples/closure/es6class.js[:17]

:::

## Interfaces

[`iface.js`](../examples/closure/iface.js)

:::

## Enums

<<< ../examples/closure/es6class.js[46:50]

<<< ../examples/closure/es6class.js[64:70]

<<< ../examples/closure/es6class.js[72:72]

:::

## Typedef

<<< ../examples/closure/es6class.js[27:44]

:::

## Generic Types

<<< ../examples/closure/template.js[:19]

:::

## Generic Types (Usage)

<<< ../examples/closure/template.js[21:37]

#### PASS

<<< ../examples/closure/template.js[39:43]

#### FAIL

<<< ../examples/closure/template.js[45:49]

:::

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
