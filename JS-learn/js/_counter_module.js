/**
 * http://usejsdoc.org/
 */

"use strict"

//var count = 0;  // global var

//function doCount() {
//	var count=0;
//	count++;
//}
//
//function getCount() {
//	return count;
//}

//-----------------------------------

//function init(){
//	
//	var count=0;  // private
//	
//	// public behav ( closures )
//	return{
//		doCount:function(){
//			count++;
//		},
//		getCount:function(){
//			return count;
//		}
//	};
//	
//}
//
//
//var counter=init();

//-------------------------------------



// module-pattern :-  IIFE or Self Executable FUnction

var counter=(function(){
	
	var count=0;  // private
	
	// public behav ( closures )
	return{
		doCount:function(){
			count++;
		},
		getCount:function(){
			return count;
		}
	};
	
})();

Object.defineProperty(window, 'counter', {writable:false}); // ES-5
counter=null;














