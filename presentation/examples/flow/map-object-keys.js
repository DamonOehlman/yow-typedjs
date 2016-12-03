let testMap: Map<string,number> = new Map();

testMap.set('one', 1);
testMap.set('two', 2);
testMap.three = 3; // in an ideal world this shouldn't work'

// incorrect
Object.keys(testMap).forEach(key => console.log(key));

// correct
Array.from(testMap.keys()).forEach(key => console.log(key));