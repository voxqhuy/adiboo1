function checkName(name) {

	// get name from the user
	// name = document.getElementById("usr").value;

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
	alert("Hi " + name + ", How r ya? It's currently under construction. Coming Soon!");
}

$(document).ready(function() {
  $('#usr').keypress(function(e) {
  	if(e.which == 13) {
  		checkName(this.value)
  	}
  });
});