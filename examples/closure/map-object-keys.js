/** @type {!Map<string,number>} */
let testMap = new Map();

testMap.set('one', 1);
testMap.set('two', 2);
testMap.three = 3;

// incorrect
Object.keys(testMap).forEach(key => console.log(key));

// correct
Array.from(testMap.keys()).forEach(key => console.log(key));