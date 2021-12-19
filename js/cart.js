const form = document.querySelector("#cartForm");
const message = document.querySelector("#message");

const requiredStar1 = document.querySelector("#requiredStar1");
const requiredStar2 = document.querySelector("#requiredStar2");
const requiredStar3 = document.querySelector("#requiredStar3");

const cardNumber = document.querySelector("#card-number");
const cardNumberError = document.querySelector("#cardNumberError");
const validThru = document.querySelector("#valid");
const validThruError = document.querySelector("#validError");
const cvc = document.querySelector("#cvc");
const cvcError = document.querySelector("#cvcError");

function validateForm(event) {
	event.preventDefault();

	let formIsValid = true;

	if (cardNumber.value.trim().length > 0) {
		cardNumberError.style.display = "none";
		requiredStar1.style.display = "none";
	} else {
		cardNumberError.style.display = "block";
		formIsValid = false;
	}

	if (validThru.value.trim().length > 0) {
		validThruError.style.display = "none";
		requiredStar2.style.display = "none";
	} else {
		validThruError.style.display = "block";
		formIsValid = false;
	}

    if (cvc.value.trim().length === 3) {
		cvcError.style.display = "none";
		requiredStar3.style.display = "none";
	} else {
		cvcError.style.display = "block";
		formIsValid = false;
	}

	console.log("works");

	if (formIsValid === true) {
		message.innerHTML = '<div class="message">The form is sendt</div>';
	} else {
		message.innerHTML = "";
	}
}

form.addEventListener("submit", validateForm);