# The Past, Present and Future Of Typed JS (ECMAScript)

(The below is a collection of my thoughts and resources in preparing for the talk, for the actual talk content, see the actual [talk](https://damonoehlman.github.io/yow-typedjs/))

## Language Facts

- Closure Compiler - Nominal Typing
- TypeScript - Structural Typing
- Flow - Nominal Typing (with structural typing for interfaces)

## Closure Compiler

<https://developers.google.com/closure/compiler/>

- (+) Uses annotations to provide type information rather than a specialised JS syntax.

- (-) Community quite small, limited "externs" support.


## TypeScript

<https://www.typescriptlang.org/>

- (+) Used node module resolution strategy by default now.  This is a significant advantage as you can connect and make use of a large collection of existing packages.

- (+) Strong community, lots of "externs" definitions.

- (-) Custom syntax while probably necessary does mean that the language *may* depart from the direction of ES? as things progress.  Not really a problem now, but could be a migration headache in the future.

### TypeScript Resources

- [TypeScript Language Spec](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md)
- 

## Flow

<https://flowtype.org/>

- (+) Build with OCaml rather than TypeScript (kudos though) or Java.  OCaml has a solid history of being able to construct compilers for alt languages (such as HaXe).

- (+) default declarations are non-nullable.  A nullable declaration requires a `?` prefix.

### Flow Resources

- [Flow Cheat Sheet](http://www.saltycrane.com/blog/2016/06/flow-type-cheat-sheet/)
- [Flow DOM Definitions](https://github.com/facebook/flow/blob/master/lib/dom.js)
- [Flow BOM Definitions](https://github.com/facebook/flow/blob/master/lib/bom.js)

## JS++

<https://docs.onux.com/en-US/Developers/JavaScript-PP>


## Overall Lessons

- Our dependence / use of libraries like jQuery is something we should significantly lessen or remove entirely.  jQuery has done a lot of good in the past, but it has almost no chance of ever being close to succesfully type checkable.

```js
// show jquery extern example
```

## Caveats

- Typed JS patterns work best in a closed ecosystem.  Use in the construction of libraries that will be consumed in an unknown environment still requires defensive JS coding patterns.
