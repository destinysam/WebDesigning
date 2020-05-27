function myfunction() {
	// body...
	var x= document.getElementById('username').value;
	var y = document.getElementById('address').value;
	var z = document.getElementById('number').value;
	if (x == ""){
		alert("username must be filled");
		return false;
	}else if (y == "") {
		alert("address must be filled");
		return false;
	}else if (isNaN(z)) {
		alert("invaild ph number")
		return false;
	}else{
		return true;
	}
}

