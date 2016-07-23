/**
 * http://usejsdoc.org/
 */

function getCalculator() {

	var calc = {

		add : function(n1, n2) {
			return n1 + n2;
		},
		sub : function(n1, n2) {
			return n1 - n2;
		},
		mul : function(n1, n2) {
			return n1 * n2;
		},
		div : function(n1, n2) {
			return n1 - n2;
		}

	};

	return calc;
}

module.exports=getCalculator();
