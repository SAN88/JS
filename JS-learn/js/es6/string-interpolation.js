/**
 * http://usejsdoc.org/
 */


var trainer={name:'Nag',duration:15};


// ES5

// dynamic string  --> concatenation

//var message="The Trainer "+trainer.name+" should be in office in "+trainer.duration +" min";
//console.log(message);


// ES-6


var message=`The Trainer ${trainer.name} should be in office in ${trainer.duration} min`;
console.log(message);