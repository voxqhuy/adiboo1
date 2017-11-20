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
	window.location.href = "Test%20Page/test.html";
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

	$("#next1").click(function() {
			window.location=document.getElementById('test12').href;
	});

	$("#next2").click(function() {
			window.location=document.getElementById('test23').href;
	});

	$("#next3").click(function() {
			window.location=document.getElementById('test34').href;
	});

	$("#prev2").click(function() {
			window.location=document.getElementById('test21').href;
	});

	$("#prev3").click(function() {
			window.location=document.getElementById('test32').href;
	});

	$("#prev4").click(function() {
			window.location=document.getElementById('test43').href;
	});

});