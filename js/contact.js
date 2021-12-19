const form = document.querySelector("#contactForm");
const message = document.querySelector("#message");

const requiredStar1 = document.querySelector("#requiredStar1");
const requiredStar2 = document.querySelector("#requiredStar2");

const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const selectGame = document.querySelector("#selectGame");
const selectGameError = document.querySelector("#selectGameError");

function validateForm(event) {
	event.preventDefault();

	let formIsValid = true;

	if (fullName.value.trim().length > 0) {
		fullNameError.style.display = "none";
		requiredStar1.style.display = "none";
	} else {
		fullNameError.style.display = "block";
		formIsValid = false;
	}

	if (validateEmail(email.value) === true) {
		emailError.style.display = "none";
		requiredStar2.style.display = "none";
	} else {
		emailError.style.display = "block";
		formIsValid = false;
	}

	console.log("works");

	if (formIsValid === true) {
		message.innerHTML = '<div class="message">The form is sendt</div>';
	} else {
		message.innerHTML = "";
	}
}

function validateEmail(email) {
	const regEx = /\S+@\S+\.\S+/;
	const patternMatches = regEx.test(email);
	return patternMatches;
}

form.addEventListener("submit", validateForm);