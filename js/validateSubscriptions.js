const form = document.querySelector ("#subform");
const email = document.querySelector("#subinput");
const error = document.querySelector(".form-error");
const success = document.querySelector(".form-success");

function validateSubcriptionEmail () {
event.preventDefault();


if (validateEmail(email.value) === true) {
    error.style.display = "none";
    success.style.display ="block"
  } else {
    error.style.display = "block";
  }

}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const matchesEmail = regEx.test(email);
    return matchesEmail;
  }

form.addEventListener("submit", validateSubcriptionEmail);