/**
 * http://usejsdoc.org/
 */


// constants


// ES-5

//var PI=3.314;
//Object.defineProperty(window, 'PI', {writable:fasle});


// ES-6
const PI=3.14;

//-----------------------------------------

// block-scope variables

function f(){
	
	var a=5;
	
	if(1===1){
		let a=10;  
	}
	
	console.log(a);
	
}

f();

//-----------------------------------------
