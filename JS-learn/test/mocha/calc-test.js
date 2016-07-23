/**
 * http://usejsdoc.org/
 */

var calc = require('../../js/calc/calc');
var assert = require('chai').assert;

describe('Calc', function() {
	
	it('should return 3 on 1+2', function() {
		var result = calc.add(1, 2);
		assert.equal(result, 3);
	});
	it('should return -1 on 1-2', function() {
		var result = calc.sub(1, 2);
		assert.equal(result, -1);
	});
	it('should return 2 on 1*2', function() {
		var result = calc.mul(1, 2);
		assert.equal(result, 2);
	});
	it('should return 3 on 0.5', function() {
		var result = calc.div(1, 2);
		assert.equal(result, 0.5);
	});
	
});