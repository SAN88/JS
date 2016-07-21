/**
 * http://usejsdoc.org/
 */



// why we need 'this' keyword?

/*
 *  imp-note:
 *  
 *  to access obj's properties in func ,
 *  we need obj's reference but dont use reference-var, use 'this' keyword
 * 
 */

//var name='GLOBAL';

var p1={
		name:'Nag',
		sayName:function(){
			console.log('im '+this.name);
		}
};

//person.sayName(); // new-context

var p2=p1;
p1={name:'Ria'};

//p2.sayName(); 


//----------------------------------------------------------

function sayNameForAll(){
	console.log('im '+this.name);
}


//var p1={name:'Nag',sayName:function(){console.log('im '+this.name);}};
//var p2={name:'Ria',sayName:function(){console.log('im '+this.name);}};


//static function-binding
var p1={name:'Nag',sayName:sayNameForAll}; 
var p2={name:'Ria',sayName:sayNameForAll};



//sayNameForAll(); // im ''   // function-invocation ( this ==> global-obj  )
//p1.sayName(); // im Nag     // method-invocation   ( this ==> invoker-obj )
//p2.sayName(); // im Ria


/*
 * every func-call creates one new-context 
 * every context must be owned by 'some-object' ===> 'this'
 * 
 */

//-----------------------------------------------------------------

var p1={name:'Nag'};
var p2={name:'Ria'};


var greetService={
		sayName:function(message,from){
			console.log(message+' im '+this.name +" : "+from);
		}
};


//greetService.sayName();


// dynamic function-binding

// a. eager invocation

//greetService.sayName.call(p1,"hello",'Kolkota');
//greetService.sayName.call(p2,"hi","chennai");

//greetService.sayName.apply(p1,["hello",'Kolkota']);
//greetService.sayName.apply(p2,["hi","chennai"]);


// b. lazy(on event) invocation

var newF=greetService.sayName.bind(p1,'Hello','India');

// on-event
newF();

//----------------------------------------------------------------------



// e.g i need 1000 persons

//var p1={};
//var p2={};



/*
 *  to create many similar objs , use 'ConstructorFunction'  ( class )
 *  
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


var p1=new Person('Nag', 32);  // constructor-invocation ( this --> new-obj )
var p2=new Person('Ria', 1);


//---------------------------------------------



/*
 *  in JS-lang , we can invoke function in 4 ways
 *  
 *  1. function invocation        ( this ----> global-obj  )
 *  2. method   invocation        ( this ----> invoker-obj )
 *  3. call/apply/bind invocation ( this --> arg-obj   )
 *  4. constructor invocation     ( this --> new-obj   )
 * 
 */


