/**
 * http://usejsdoc.org/
 */

/*
 *  JS - lang  : data-types
 *  --------------------------
 *  
 *  1. simple   ( values  )
 *  
 *     a. string
 *     b. number
 *     c. boolean
 *     d. null
 *     e. undefined
 *     
 *     f. symbol ( from ES-6 )
 *     
 *  2. complex  ( objects )
 * 
 * 
 */

//--------------------------------------

// a. String

var name="Nag";
var selection='a';


//--------------------------------------

// b. Number

var count=10;
var cost=12.12;


//--------------------------------------

// c. Boolean

var found=false;

/*
 *  'falsy' values
 *  
 *  1. false
 *  2. 0
 *  3. ""
 *  4. null
 *  5. undefined
 *  6. NaN
 *  
 *  reference : https://dorey.github.io/JavaScript-Equality-Table/
 * 
 */


//--------------------------------------


// d. undefined

var v;


//---------------------------------------

// e. null

var person=null;


//---------------------------------------


//==================================================


/*
 * 
 *  object
 *  --------
 *  
 *   --> collection of key(property):value pairs about an entity
 *   
 *   e.g
 *   
 *   person,product,car
 *   
 *   how to create object?
 *   
 *   var ref=new ConstructorFunction();
 *   
 *   e.g
 *   
 *   Object()
 *   Array()
 *   
 *   Person()
 * 
 */


var person=new Object();
person.name="Nag";
person.age=32;
person.doWork=function(){
	console.log('teaching...');
};

delete person.age;


//----------------------------------


// some built-in types with literal syntax

/*
 *  a. Object
 *  b. Array
 *  c. RegExp
 *  d. Function
 * 
 */

//-----------------------------------------------

// a. Object

var person=new Object();
person.name="Nag";
person.age=32;
person.doWork=function(){
	console.log('teaching...');
};

// or Literal syntax

var person={
		name:'Nag',
		age:32,
		doWork:function(){
			console.log('teaching...');
		}
};

//-----------------------------------------------


// b. Array

var arr=new Array();
arr.push("idly");
arr.push("vada");
arr.push("poori");


//or Literal syntax

var colors=["red","green","blue"];

//-----------------------------------------------


// c. RegExp

var ssnPattern=new RegExp("\\d{3}-\\d{2}-\\d{4}");

//or Literal syntax

var ssnPattrn=/ \d{3}-\d{2}-\d{4} /;

//-----------------------------------------------

// d. Function

/*
 *  in JS , all functions are objects
 * 
 * 
 */

var add=new Function("n1","n2","var result=n1+n2;return result;");

//or Literal syntax

function add(n1,n2){
	var result=n1+n2;
	return result;
}


add.prop=123;
add.avg=function(){
	console.log('avg...');
};


//----------------------------------------------------------


// How to access obj's properties ?

/*
 *  way-1  :  ' .   ' notation
 *  way-2  :  ' [ ] ' notation
 * 
 * 
 */

var person={
		name:'Nag',
		'full-name':'Nag N'
};

console.log(person.name);
console.log(person['full-name']);

person.age=32;
person['full-address']="Bangalore";


var propName="name";
console.log(person[propName]);










