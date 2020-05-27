function myfunction(val) {
	// body...
    Number(val);
	document.getElementById('InputBox').value += val;
}
function ClearScreen(argument) {
	document.getElementById('InputBox').value = " ";
// body...
}
function result(argument) {
	var variable1 = document.getElementById('InputBox').value
	var variable2 = eval(variable1)
	document.getElementById("InputBox").value = variable2;
	// body...
}