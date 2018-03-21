var add = function(number1, number2) {
	return number1 + number2;
};

var subtract = function(number1, number2) {
	return number1 - number2;
};

var multiply = function(number1, number2) {
	return number1 * number2;
};

var divide = function(number1, number2) {
	return number1 / number2;
};


$(document).ready(function(){
	$('form#calculate').submit(function(event){
		//debugger;
		var number1 = parseInt($('#add1').val());
		var number2 = parseInt($('#add2').val());
		var choiceResult = $("input:radio[name=choice]:checked").val(); //will return which one was checked!
		console.log(choiceResult);
		if (choiceResult === "add") {
			result = add(number1, number2);
		} else if (choiceResult === "sub") {
			result = subtract(number1, number2);
		} else if (choiceResult === "mult") {
			result = multiply(number1, number2);
		} else if (choiceResult === "div") {
			result = divide(number1, number2);
		}
		$("#output").text(result);
		event.preventDefault();
	});
});
