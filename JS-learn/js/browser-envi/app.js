/**
 * http://usejsdoc.org/
 */

// using DOM API
// document.addEventListener('DOMContentLoaded', function(e) {
//
//	console.log('DOM ready..');
//
//	var box = document.querySelector('.jumbotron');
//	var hideBtn = document.querySelector('.btn-danger');
//	var showBtn = document.querySelector('.btn-primary');
//	var sayHelloBtn = document.querySelector('.btn-success');
//
//	hideBtn.addEventListener('click', function(e) {
//		box.style.display = 'none';
//	});
//	showBtn.addEventListener('click', function(e) {
//		box.style.display = '';
//	});
//	sayHelloBtn.addEventListener('click', function(e) {
//		box.innerHTML = "Hellooo";
//	});
//
//});
//
//window.onload = function() {
//	console.log('Window onload....');
//};
// ----------------------------------------------------------------
/*
 * basic syntax to use jQuery
 * 
 * 
 * jQuery('selector',context).action1().action2()
 * 
 * 
 * 
 */

$(document).ready(function() {
	
	//
	//		var $box = $('.jumbotron');
	//	
	//		var $hideBtn = $('.btn-danger');
	//		var $showBtn = $('.btn-primary');
	//	
	//		$hideBtn.on('click', function(jqEvent) {
	//			// $box.hide();
	//			$box.slideUp(2000);
	//		});
	//		$showBtn.on('click', function(jqEvent) {
	//			// $box.show();
	//			$box.slideDown(2000);
	//		});
	//	
	//		$('.btn-success').click(function() {
	//			// $box.text('Welcome to Jquery-world');
	//			$box.html('<h3>Welcome to Jquery-world</h3>').css({
	//				'color' : 'red',
	//				border : "1px solid green"
	//			});
	//		});
	
	//----------------------------------------------------
	
	
	//	$('#loginForm').submit(function(jqEvent) {
	//		
	//		console.log('submit-loginForm');
	//		var $email=$('#email',this);
	//
	//		if(!$email.val()){
	//			$email.closest('div').addClass('has-error');
	//		}else{
	//			$email.closest('div').removeClass('has-error');
	//		}
	//		
	//		jqEvent.preventDefault();
	//	});
	
	//----------------------------------------------------
	
	// 
	
	$("#box1").colorify({text:'BOX-1',color:'red'});

	$("#box2").colorify({text:'BOX-2',color:'blue'})
	
	//----------------------------------------------------
	
	
	$("#date").datepicker({'dateFormat':'mm/dd/yy'});
	
	//-----------------------------------------------------

});
