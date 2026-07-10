
const assert = require('assert');
const { sub } = require('./index');

assert.strictEqual(sub(5, 3), 2, 'sub(5, 3) should equal 2');
assert.strictEqual(sub(10, 4), 6, 'sub(10, 4) should equal 6');
assert.strictEqual(sub(0, 5), -5, 'sub(0, 5) should equal -5');

console.log('All tests passed!');
