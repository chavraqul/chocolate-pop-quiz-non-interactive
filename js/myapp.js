$(document).ready(function() {
	$('#beginQuiz').show();
	$('#start').click(function(){
		$("#beginQuiz").hide();
		$("#q1").show();
	});
	$('#submit-1').click(function(){
		$("#q1").hide();
		$("#a1").show();
	});
	$('#next-1').click(function(){
		$("#a1").hide();
		$("#q2").show();
	});
	$('#submit-2').click(function(){
		$("#q2").hide();
		$("#a2").show();
	});
	$('#next-2').click(function(){
		$("#a2").hide();
		$("#q3").show();
	});
	$('#submit-3').click(function(){
		$("#q3").hide();
		$("#a3").show();
	});
	$('#next-3').click(function(){
		$("#a3").hide();
		$("#q4").show();
	});
	$('#submit-4').click(function(){
		$("#q4").hide();
		$("#a4").show();
	});
	$('#next-4').click(function(){
		$("#a4").hide();
		$("#q5").show();
	});
	$('#submit-5').click(function(){
		$("#q5").hide();
		$("#a5").show();
	});
	$('#next-5').click(function(){
		$("#a5").hide();
		$("#q6").show();
	});
	$('#submit-6').click(function(){
		$("#q6").hide();
		$("#a6").show();
	});
	$('#next-6').click(function(){
		$("#a6").hide();
		$("#q7").show();
	});
	$('#submit-7').click(function(){
		$("#q7").hide();
		$("#a7").show();
	});
	$('#next-7').click(function(){
		$("#a7").hide();
		$("#q8").show();
	});
	$('#submit-8').click(function(){
		$("#q8").hide();
		$("#a8").show();
	});
	$('#next-8').click(function(){
		$("#a8").hide();
		$("#q9").show();
	});
	$('#submit-9').click(function(){
		$("#q9").hide();
		$("#a9").show();
	});
	$('#next-9').click(function(){
		$("#a9").hide();
		$("#q10").show();
	});
	$('#submit-10').click(function(){
		$("#q10").hide();
		$("#a10").show();
	});
	$('#next-10').click(function(){
		$("#a10").hide();
		$("#endQuiz").show();
	});
	$('#startOver').click(function(){
		$("#endQuiz").hide();
		$("#beginQuiz").show();
	});


});