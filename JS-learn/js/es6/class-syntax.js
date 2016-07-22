/**
 * http://usejsdoc.org/
 */


// ES-5

//function Person(name, age) {
//	this.name = name;
//	this.age = age;
//}
//
//Person.prototype.sayName = function() {
//	console.log('im ' + this.name);
//};
//Person.prototype.sayAge = function() {
//	console.log('im ' + this.age + " old");
//};


// ES-6

class Person{
	constructor(name, age){
		this.name = name;
		this._age = age;
		this.isOld=false;
	}
	sayName() {
		console.log('im ' + this.name);
	}
	sayAge() {
		console.log('im ' + this.age + " old");
	}
	static staMethod(){
		console.log('Sta method....');
	}
	
	set age(age){
		if(age>60){
			this.isOld=true;
		}
		this._age=age;
	}
	
	get age(){
		return this._age;
	}
	
}

//Person.staMethod();
//
//var p1 = new Person('Nag', 32);
//var p2 = new Person('Ria', 1);


//-------------------------------------------------



class Employee extends Person{
	
	constructor(name,age,salary){
		super(name,age);
		this.salary=salary;
	}
	
	sayName(){
		console.log('im '+this.name +" ( override )");
	}
	
	doWork(){
		console.log(this.name + ' Emp working...');
	}
	
}

var emp=new Employee('Nag');






