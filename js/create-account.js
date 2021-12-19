const form = document.querySelector("#accountForm");
const message = document.querySelector("#message");

const requiredStar1 = document.querySelector("#requiredStar1");
const requiredStar2 = document.querySelector("#requiredStar2");
const requiredStar3 = document.querySelector("#requiredStar3");
const requiredStar4 = document.querySelector("#requiredStar4");


const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");

function validateForm(event) {
	event.preventDefault();

	let formIsValid = true;

	if (firstName.value.trim().length > 0) {
		firstNameError.style.display = "none";
        requiredStar1.style.display = "none";
	} else {
		firstNameError.style.display = "block";
		formIsValid = false;
	}

	if (lastName.value.trim().length > 0) {
		lastNameError.style.display = "none";
        requiredStar2.style.display = "none";
	} else {
		lastNameError.style.display = "block";
		formIsValid = false;
	}

	if (validateEmail(email.value) === true) {
		emailError.style.display = "none";
        requiredStar3.style.display = "none";
	} else {
		emailError.style.display = "block";
		formIsValid = false;
	}

	if (password.value.trim().length > 4) {
		passwordError.style.display = "none";
        requiredStar4.style.display = "none";
	} else {
		passwordError.style.display = "block";
		formIsValid = false;
	}

	console.log("works");

	if (formIsValid === true) {
		message.innerHTML = '<div class="message">Successfully created account</div>';
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
