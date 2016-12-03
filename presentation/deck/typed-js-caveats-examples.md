## Dealing with the DOM

#### Closure Compiler
#### FAIL

<<< ../examples/closure/dom-interaction.js

#### TypeScript
#### PASS

<<< ../examples/typescript/dom-interaction.ts

#### Flow
#### PASS

<<< ../examples/flow/dom-interaction.js

:::

## 3rd party libraries
### (using jQuery `attr` as an example)

#### Closure Compiler extern definition

```js
/**
 * @param {(string|Object<string,*>)} arg1
 * @param {(string|number|boolean|function(number,string))=} arg2
 * @return {(string|!jQuery)}
 */
jQuery.prototype.attr = function(arg1, arg2) {};
```

#### TypeScript type definition

```ts
interface jQuery {
  // ...
  attr(attributeName: string): string;
  attr(attributeName: string, value: string|number): JQuery;
  attr(attributeName: string, func: (index: number, attr: string) => string|number): JQuery;
  attr(attributes: Object): JQuery;
}

// flow can pretty much use the same definition
// see: https://github.com/marudor/flowInterfaces
```

:::

## Feeling too secure with type checking

<<<ts ../examples/typescript/map-object-keys.ts[:4]

<<<ts ../examples/typescript/map-object-keys.ts[6:8]

#### PASS
<<<ts ../examples/typescript/map-object-keys.ts[9:10]

#### FAIL
<<<ts ../examples/typescript/map-object-keys.ts[12:]