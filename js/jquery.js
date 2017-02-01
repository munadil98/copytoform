
$(document).ready(function() {

	$(".btnName").click(function(){

		// var	name=$(".table1 tr:nth-child(0) td:nth-child(1)").text();

		$(".btnName").prop('disabled', true);
		var	name=$(".name").text();

		$("#name").val(name);
		// $(".p").text(name);

	});	

		$(".btnAge").click(function(){

		// var	name=$(".table1 tr:nth-child(0) td:nth-child(1)").text();
		$(".btnAge").prop('disabled', true);
		var	age=$(".age").text();

		$("#age").val(age);
		// $(".p").text(name);

	});	

	$(".btnGender").click(function(){

		// var	name=$(".table1 tr:nth-child(0) td:nth-child(1)").text();
		$(".btnGender").prop('disabled', true);
		var	gender=$(".gender").text();

		$("#gender").val(gender);
		// $(".p").text(name);

	});	

	$(".btnOccupation").click(function(){

		// var	name=$(".table1 tr:nth-child(0) td:nth-child(1)").text();
		$(".btnOccupation").prop('disabled', true);
		var	occupation=$(".occupation").text();

		$("#occupation").val(occupation);
		// $(".p").text(name);

	});	

	$(".btnEmail").click(function(){

		// var	name=$(".table1 tr:nth-child(0) td:nth-child(1)").text();
		$(".btnEmail").prop('disabled', true);
		var	email=$(".email").text();

		$("#email").val(email);
		// $(".p").text(name);

	});	

	$(".btnPhone").click(function(){

		// var	name=$(".table1 tr:nth-child(0) td:nth-child(1)").text();
		$(".btnPhone").prop('disabled', true);
		var	phone=$(".phone").text();

		$("#phone").val(phone);
		// $(".p").text(name);

	});	

		$(".btnAll").click(function(){

		// var	name=$(".table1 tr:nth-child(0) td:nth-child(1)").text();
		$(".btnAll").prop('disabled', true);
		var	name=$(".name").text();

		$("#name").val(name);


		var	age=$(".age").text();

		$("#age").val(age);


		var	gender=$(".gender").text();

		$("#gender").val(gender);


		var	occupation=$(".occupation").text();

		$("#occupation").val(occupation);


		var	email=$(".email").text();

		$("#email").val(email);


		var	phone=$(".phone").text();

		$("#phone").val(phone);
		// $(".p").text(name);

	});	
});


