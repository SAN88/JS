/**
 * http://usejsdoc.org/
 */

"use strict"


//var person={
//		name:''
//};

// how to check property existence?

//way-1

//if(person.name){
//	console.log('name property exist');
//}

//way-2

//if("name" in person){
//	console.log('name property exist');
//}

//---------------------------------------------

//var person={
//		name:'Nag',
//		age:32
//};
//
//
//// how to enumurate obj's properties
//
//
//for(var prop in person){
//	if(person.hasOwnProperty(prop)){
//		console.log(prop+":"+person[prop]);
//	}
//}



//---------------------------------------------

//
//
//var person={
//		name:'Nag'
//};
//Object.defineProperty(person, 'name', {configurable:false,writable:false,enumerable:false});
//Object.defineProperty(person, 'age', {value:32,configurable:false,writable:false,enumerable:false});

//Object.defineProperty(person, 'name', {configurable:true});
//delete person.name;

//person.name='adasdasdasd';

//for(var prop in person){
//	console.log(prop);
//}



//---------------------------------------------



//var person={
//		name:'Nag',
//		age:32
//};

//Object.preventExtensions(person);
//Object.seal(person);
//Object.freeze(person);  // immutable obj

//person.newProp="new Value";
//delete person.name;
//person.name='';




//---------------------------------------------

var person={
		_name:'Nag',
		set name(newName){
			if(newName){
				this._name=newName;
			}
		},
		get name(){
			return this._name;
		}

};


person.name='New Nag';  // set
console.log(person.name); // get


//---------------------------------------------








