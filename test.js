
const assert = require('assert');
const { add } = require('./index');

assert.strictEqual(add(5, 3), 2, 'add(5, 3) should return 2');
assert.strictEqual(add(10, 4), 6, 'add(10, 4) should return 6');
assert.strictEqual(add(0, 5), -5, 'add(0, 5) should return -5');

console.log('All tests passed!');
