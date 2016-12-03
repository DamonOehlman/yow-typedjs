let testMap: Map<string,number> = new Map();

testMap.set('one', 1);
testMap.set('two', 2);

// type error: caught by closure compiler + typescript, not in flow
testMap.three = 3;

// reading keys in the map correctly
const correctKeys = Array.from(testMap.keys());

// incorrect at run-time (ok at compile tile - technically type correct)
const incorrectKeys = Object.keys(testMap);