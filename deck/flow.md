# Flow

:::

## Overview

- Initial release: [November 2014](https://code.facebook.com/posts/1505962329687926/flow-a-new-static-type-checker-for-javascript/)
- Types defined inline with code
- Built with OCaml
- Classes are nominally typed, Interfaces are structurally typed
- Not a compiler, but a static type checker

:::

## Class Example

<<<ts ../examples/flow/samplecls.js[2:14]

<<<ts ../examples/flow/samplecls.js[16:20]

:::

## Interfaces

<<<ts ../examples/flow/iface.js[2:8]

#### PASS

<<<ts ../examples/flow/iface.js[10:14]

#### PASS

<<<ts ../examples/flow/iface.js[16:16]

:::

## Interfaces (Failing Cases)

<<<ts ../examples/flow/iface.js[2:8]

#### FAIL

<<<ts ../examples/flow/iface.js[19:20]

#### FAIL

<<<ts ../examples/flow/iface.js[22:26]

:::

## Interfaces (non class examples)

<<<ts ../examples/flow/iface-param.js[2:11] 

#### PASS

<<<ts ../examples/flow/iface-param.js[14:14] 

#### FAIL

<<<ts ../examples/flow/iface-param.js[18:18] 

:::

## Overloaded Functions / Methods

#### Available for lib definitions, but not general use.

<<<ts ../examples/flow/lib/dom.js[488:495]

Many more examples can be found in the [flow internal lib definitions](https://github.com/facebook/flow/tree/master/lib).

:::

## Generics

<<<ts ../examples/flow/generics.js[2:12]

:::

## Generics (Usage Example)

<<<ts ../examples/flow/generics.js[14:24]

#### PASS

<<<ts ../examples/flow/generics.js[26:27]

#### FAIL

<<<ts ../examples/flow/generics.js[30:31]

:::

## Enums (using unions of literal types)

<<<ts ../examples/flow/literal-types.js[2:14]

#### PASS

<<<ts ../examples/flow/literal-types.js[16:17]

#### FAIL

<<<ts ../examples/flow/literal-types.js[20:20]

:::

## More literal types

<<<ts ../examples/flow/map-literal-type-key.js[2:6]

#### PASS

<<<ts ../examples/flow/map-literal-type-key.js[8:10]

#### FAIL

<<<ts ../examples/flow/map-literal-type-key.js[13:13]

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

