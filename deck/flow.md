# Syntax: Flow
## (inline type information)

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
