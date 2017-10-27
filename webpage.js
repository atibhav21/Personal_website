//name_div.backgroundImage.src = url("ucla.jpg")

// TODO: MAKE HEADER_DIV FIXED SO THAT SCROLLING DOESN'T AFFECT IT
var header_div = document.getElementById("header_div");
var header_table = document.createElement("table");

header_table.classList.add("header_table");

var header_row = document.createElement("tr");
var home_button = document.createElement("td");
home_button.classList.add("header_cells");
home_button.innerHTML = "HOME";

home_button.onclick = function() {
	console.log("Clicked Home Button");
	// TODO: SCROLL BACK TO TOP
}

var resume_button = document.createElement("td");
resume_button.classList.add("header_cells");
resume_button.innerHTML = "RESUME";

resume_button.onclick = function() {
	console.log("Clicked Resume Button");
	// TODO: OPEN RESUME IN PDF FORMAT IN NEW TAB
}

header_row.appendChild(home_button);
header_row.appendChild(resume_button);
header_table.appendChild(header_row);
header_div.appendChild(header_table);

var name_div = document.getElementById("name_div");
var name_table = document.createElement("table");
name_table.classList.add("name_table");