# TypeScript

:::

## Overview

- Initial release: [Octoboer 2012](https://channel9.msdn.com/posts/Anders-Hejlsberg-Introducing-TypeScript)
- Types defined inline with code, with [some JSDoc annotations supported](https://github.com/Microsoft/TypeScript/wiki/JSDoc-support-in-JavaScript).
- Built with TypeScript
- By far the most OO centric of the languages.

:::

## Class Example

<<< ../examples/typescript/samplecls.ts[:13]

<<< ../examples/typescript/samplecls.ts[15:19]

:::

## Interfaces

<<< ../examples/typescript/iface.ts[:4]

#### PASS

<<< ../examples/typescript/iface.ts[5:8]

#### FAIL

<<< ../examples/typescript/iface.ts[11:12]

#### FAIL

<<< ../examples/typescript/iface.ts[14:16]

:::

## Structural Interfaces
### (similar to closure compiler `@typedef`)

<<< ../examples/typescript/iface_structural.ts[:11]

#### PASS

<<< ../examples/typescript/iface_structural.ts[13:13]

#### FAIL

<<< ../examples/typescript/iface_structural.ts[17:17]

:::

## Overloaded Functions / Methods

<<< ../examples/typescript/overloaded-methods.ts[:19]

:::

## Overloaded Functions / Methods (Usage)

<<< ../examples/typescript/overloaded-methods.ts[21:23]

#### PASS

<<< ../examples/typescript/overloaded-methods.ts[25:28]

#### FAIL

<<< ../examples/typescript/overloaded-methods.ts[30:32]

:::

## Generics

<<< ../examples/typescript/generics.ts[1:11]

:::

## Generics (Usage Example)

<<< ../examples/typescript/generics.ts[13:23]

#### PASS

<<< ../examples/typescript/generics.ts[25:26]

#### FAIL

<<< ../examples/typescript/generics.ts[29:30]

:::

## Enums

<<< ../examples/typescript/enum.ts[:16]

<<< ../examples/typescript/enum.ts[18]

:::

## String literal types

<<< ../examples/typescript/string-literal-types.ts[2:6]

#### PASS

<<< ../examples/typescript/string-literal-types.ts[16:17]

#### FAIL

<<< ../examples/typescript/string-literal-types.ts[19:19]

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