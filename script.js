let nameField = document.getElementById("name");
let emailField = document.getElementById("email");
let saveButton = document.getElementById("saveButton");

function saveResponses() {
	localStorage.setItem("name", nameField.value);
	localStorage.setItem("email", emailField.value);
}

saveButton.addEventListener("click", saveResponses);


