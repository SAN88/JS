/**
 * http://usejsdoc.org/
 */

var trainer = {
	doTeach : function() {

			console.log('teaching.....');
			var notes = "JS_Notes";  //  will get moved to HEAP , before context get destroy

			setTimeout(function learn() {
				try {
					//throw new Error("hate-Js");
					console.log('learning...with ' + notes);
				} catch (e) {
					console.log('i caught-' + e.message);
				}
			}, 5000);

			console.log('teaching ends..'); // doTeach context-destroyed....

	

	}
};

trainer.doTeach(); // New Context created.....
