var requestURL = 'https://api.myjson.com/bins/q4ib7';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


function checkName(name) {
	// get name from the user
	// if name is right, go to next page; otherwise, return an error
	if (name.toLowerCase() == "tu" || name.toLowerCase() == "sang") {
		toSecondPage(name);
	} else if  (name == "") {
		document.getElementById("nameError").innerHTML = "Your name cannot be empty";
	} else {
		document.getElementById("nameError").innerHTML = "You may not be allowed here";
	}
}

function toSecondPage(name) {
	window.location.href = "test.html";

}

$(document).ready(function() {
	$('#usr').keypress(function(e) {
		if(e.which == 13) {
			checkName(this.value)
  	}
  });
	// console.log(request == null);
	// request.onload = function() {
	// 	var superHeroes = request.response;
	// 	console.log(superHeroes);
	// }
});