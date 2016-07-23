/**
 * http://usejsdoc.org/
 */

/*
 * UnitTesting
 * 
 * AAA action
 * 
 * A --> Arrange ,A --> Act, A --> Assert
 * 
 */

describe('calcular test suite', function() {

	var calc;

	// Arrange
	beforeEach(function() {
		calc = getCalculator();
	});

	// Act and Assert
	it("shud 1+2=3", function() {
		var result = calc.add(1, 2);
		expect(3).toBe(result);
	});
	it("shud 1-2=-1", function() {
		var result = calc.sub(1, 2);
		expect(-1).toBe(result);
	});
	it("shud 1*2=2", function() {
		var result = calc.mul(1, 2);
		expect(2).toBe(result);
	});
	it("shud 1/2=0.5", function() {
		var result = calc.div(1, 2);
		expect(0.5).toBe(result);
	});

	afterEach(function() {
		calc = null;
	});

});