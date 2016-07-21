/**
 * http://usejsdoc.org/
 */

//var nums = [ 1, 2, 3, 4, 5, 9, 8, 7, 6, 10 ];

//nums.sort();

//nums.sort(function(a, b) {
//	return a-b;
//});

// using arrow function
//nums.sort((a, b)=>{
//	return a-b;
//});

//---------------------------------------------


function Person(name,age){
	this.name=name;
	this.age=age;
	
	//	var self=this;
	//	setInterval(function() {
	//		self.age++;  
	//		console.log(self.age);
	//	}, 1000);
	
	setInterval(()=>{this.age++;console.log(this.age);},1000);
	
	/*
	 * imp-note : arrow-functions will execute with parent-function context.
	 * 
	 */
	
}

var p=new Person('Ria', 0);  //