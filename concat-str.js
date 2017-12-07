'use strict'

/*
 * Create a function `concatStr` that takes 2 arguments and concatenate them
 *
 * @notions Functions, Operators
 * @next get
 */

// Your code :
const n = 'nafi'
const k = 'kabore'
const concatStr = (n, k) => n + k
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof concatStr, 'function', 'Should be a function')
assert.strictEqual(concatStr.length, 2, 'Should takes 2 arguments')
assert.strictEqual(concatStr('a', 'b'), 'ab')
assert.strictEqual(concatStr('yolo', 'swag'), 'yoloswag')
// End of tests */
