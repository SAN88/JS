/**
 * http://usejsdoc.org/
 */



// ES5
//
//var person={
//		name:'Nag',
//		sayName:function(){
//			console.log('im '+this.name);
//		}
//};


// ES6


//#1

//var person={
//		name:'Nag',
//		sayName(){
//			console.log('im '+this.name);
//		}
//};


//#2  - computed property-name

var v=10;

var person={
		[('name'+(v+15))]:'some-value'
};

console.log(person.name25);





