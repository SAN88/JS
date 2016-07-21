/**
 * http://usejsdoc.org/
 */

"use strict"


// JS --> functional programming-lang


// function as values ( can be assigned to var )

function sayHello(){
	console.log('Hello...');
}

var sayHi=sayHello;

//sayHi();

//-------------------------------------------------

// functions as an argument

function greet(g){
	if(g){
		g();
		return;
	}
	console.log('Hello...');
}


//greet();
//greet(function(){console.log('Ola.....');});

//e.g

var nums=[1,3,5,7,9,2,4,6,8,10];
//nums.sort();
nums.sort(function(a,b){return a-b;});
//console.log(nums);


//-------------------------------------------------


// function as return-value

function teach(){
	console.log('teaching....');
	
	function learn(){
		console.log('learning...');
	}
	
	return learn;
}


//var learnFunc=teach();
//learnFunc();
//learnFunc();



//-------------------------------------------------



// function - arguments


/*
 *  every function-execution-context has one implicit object - 'arguments'
 *  
 *  by default all params will get assigned to this.
 * 
 */

function reflect(arg1){
	console.dir(arguments);
	return arguments[2];
}

//console.log(reflect(12,13,14,15));


//e.g


function sum(){
	
	// single-var design pattern
	
	var i=0,
	    len=arguments.length,
	    result=0;
	
	while(i<len){
		result+=arguments[i];
		i++;
	}
	
	
	return result;
	
}


//------------------------------------------------------


// variables scope  

/*
 *  global-scope
 *  function-scope
 *  
 *  no block-scope in JS-lang till ES-5 
 * 
 */


var globalVar=12;  // global-scope


function f(){
	
	var i=13; // function var
	
	
	if(1===1){
		let v=100;   // block-scope  ( from es6 )
	}
	
	console.log(v);
	
}

//f();


//-----------------------------------------------------



function f1(){
	
	k=200;  // implict global-var in non strict-mode else an error
	
}

//f1();

//console.log(k);



//-----------------------------------------------------









































