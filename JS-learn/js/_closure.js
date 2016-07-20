/**
 * http://usejsdoc.org/
 */

/*
 * 
 * A closure is a function having access to the parent scope,
 * even after the parent function has closed.
 * 
 * why we need?
 * 
 * --> to abstract any public of any module.
 * --> while executing async , function able to access parent-scoped data.
 * 
 */




function teach(sub) {

	console.log('teaching ' + sub);
	var notes = sub + "-notes";
	
	var someVar=123;

	function learn() {
		console.log('learning ' + sub + " with " + notes);
	}
	
	//learn();

	console.log('teaching ends...');

	return learn;
}

var learnFunc=teach('JS'); // new execution-context with arguments and local-vars
learnFunc();
learnFunc();