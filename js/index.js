var requestURL = 'https://api.myjson.com/bins/q4ib7';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

var timer;




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
	window.location.href = "homepage.html";
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

	// Profile buttons' handlers
	$(".btn").click(function() {
		var classes = this.classList;
		if (classes.contains("overview_button")) {
			window.location.href = "overview.html";
		} else if (classes.contains("setting_button")) {
			window.location.href = "settings.html";
		} else if (classes.contains("history_button")) {
			window.location.href = "history.html";
		} else if (classes.contains("note_button")) {
			window.location.href = "notes.html";
		}
		// var id = this.id;
		// switch (id) {
		// 	case 'profileOverviewBtn':
		// 	window.location.href = "overview.html";
		// 	break;

		// 	case 'profileSettingsBtn':
		// 	window.location.href = "settings.html";
		// 	break;

		// 	case 'profileHistoryBtn':
		// 	window.location.href = "history.html";
		// 	break;

		// 	case 'profileNotesBtn':
		// 	window.location.href = "notes.html";
		// 	break;
		// }
	});
	$("#profileEditBtn").click(function() {
		window.location.href = "settings.html";
	});

	// var weeklytestAnchor = document.getElementById('weeklyTestIcon');
	// var weeklytestIcon = document.getElementById('aaa');

	// weeklytestAnchor.onmouseout = function () {
	// 	timer = setTimeout(function(){
 //                weeklytestIcon.src = '../Icons/weeklytest-white.png';
 //            }, 200);

	// };

	// weeklytestAnchor.onmouseover = function () {
	// 	timer = setTimeout(function(){
 //                weeklytestIcon.src = '../Icons/weeklytest-black.png';
 //            }, 200);
	// };




});