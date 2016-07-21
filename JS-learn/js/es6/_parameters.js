/**
 * http://usejsdoc.org/
 */

/*
 *  a. default
 *  b. rest
 *  c. spread
 *  
 * 
 */



// a. default params


// ES5

//function add(n1,n2){
//	if(!n1){
//		n1=0;
//	}
//	if(!n2){
//		n2=0;
//	}
//	var result=n1+n2;
//	return result;
//}

// ES6

//function add(n1=0,n2=0){
//	var result=n1+n2;
//	return result;
//}
//
//console.log(add(12,13));


//-----------------------------------------


// rest params ( in java , varargs )

//function f(a,b,...rest){
//	console.log(a);
//	console.log(b);
//	console.log(rest); // array
//}
//
//f(1,2,3,4,5,6);


//-----------------------------------------

// spread params


function f(a,b,c){
	console.log(a);
	console.log(b);
	console.log(c);
}

var arr=[1,2,3];

//f(arr[0],arr[1],arr[2]);
f(...arr);



var arr1=[1,2,3,4,5];
var name='nag';
var arr2=[0,...arr1,6,7,8,9,10,...name];



//----------------------------------------















