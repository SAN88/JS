/**
 * http://usejsdoc.org/
 */

var trainer = {
	name : 'Nag',
	doTeach : function() {
		console.log(this.name + " teaching JS");  // Nag .......
		var self=this; // for child-context , to access obj properties
		function doLearn() {
			console.log(this.name+ ' learning JS from ' + self.name ); // ........ ??
		}
		//doLearn(); // function invocation
		var emp={name:'cts'};
		doLearn.call(emp);  // call invocation
	}
};

trainer.doTeach(); // method invocation

//var newTrainer={name:'Ria'};
//trainer.doTeach.call(newTrainer);