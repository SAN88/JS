/**
 * http://usejsdoc.org/
 */



function Person(name,age){
	this.name=name;
	this.age=age;
	this.sayName=function(){
		console.log('im '+this.name);
	};
	this.sayAge=function(){
		console.log('im '+this.age+" old");
	};
}

//Person('CTS', 100);  // Dont
var p=new Person('Nag', 32);  // 

/*
 *  imp-note:
 * 
 *  -->never invoke constructor-func without 'new' keyword;
 * 
 */

