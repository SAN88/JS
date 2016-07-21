/**
 * http://usejsdoc.org/
 */

var trainer={
		tnrName:'Nag'
};

var trainerService={
		doTeach:function(){
			//console.log(this);
			console.log(this.tnrName+" teaching JS");
		}
};



var teachBtn=document.getElementById('teachBtn');
//teachBtn.addEventListener('click',trainer.doTeach);

// soln-1
//teachBtn.addEventListener('click',function(){
//	//console.log(this);
//	trainer.doTeach(); // method-invocation pattern
//});

//soln-2
teachBtn.addEventListener('click',trainerService.doTeach.bind(trainer));


