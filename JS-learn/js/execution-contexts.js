/**
 * http://usejsdoc.org/
 */

/*
 *  Execution Context
 *  ------------------
 *  
 *  --> memory(stack-frame) includes args,local-variables with instructions.
 *  
 *  imp-note :
 *  
 *  when initial JS-loaded into runtime , 
 *  by default one 'global-execution-context' will get created
 *  
 *   window === this
 *   
 *   
 *   	context - 2 phases
 *   	-------------------
 * 
 *    	a. context-creation
 *    
 *        --> all variable-declarations in that are hoisted(lifting-up) 
 *            to top with default-value ( undefined )
 *        --> for global-context , all global variables will become properties of global-object ( window )    
 *    
 *   	b. context-execution
 *   
 *        --> instruction will get execute step-by-step. 
 *        
 *        
 *     --------------------------------------------------------
 *     
 *      --> every function-invocation ,   
 *          also creates new execution-context  which is child of above context.
 *        
 *      -------------------------------------------------------
 *      
 *      best practice : all variables declare at top file/function to avoid hoisting confuse.
 *      
 *      -----------------------------------------------------------
 */


//-------------------------------------------

//console.log(v);
//var v=12;
//console.log(v);

//-------------------------------------------

//var v=12;
//
//function f1(){
//	var v;
//	console.log(v);
//	v=13;
//}
//
//f1();  // new execution-context

//-------------------------------------------

// global-context ( by default )

//var a=10;
function f1(){
	function f2(){
		console.log(a);
	}
	//f2(); // f2-context --> f1-context
	//var a=20;
	return f2;
}

//var f=f1();  // f1-context  ---> global-context
//f();// f2-context --> f1-context

//--------------------------------------------



//imp-note:

/*
* function-declaration always will get hoisted with func-obj in the context 
* but function-expression wont
* 
*/

//--------------------------------------------

//console.log(add(12,13));

//function add(a,b){
//	return a+b;
//}

//console.log(add(12,13)); // 25

//--------------------------------------------


//console.log(add(12,13)); // Error

var add=function(a,b){
	return a+b;
};

//console.log(add(12,13));

//---------------------------------------------



/*
 * 
 * Function-Declaration Vs Function-Expression
 * 
 * Function-Declaration
 * ---------------------
 * 
 * --> function-obj will get created at 'context-creation' phase
 *  
 * Function-Expression
 * ---------------------
 * 
 *  --> function-obj will get created at 'context-execution' phase
 *  
 *      adv:- 
 *      
 *       can create create functions based on conditions/input params.
 * 
 */

//----------------------------------------------------------------









