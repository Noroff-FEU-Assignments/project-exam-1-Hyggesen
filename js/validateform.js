const form = document.querySelector ("#contactForm");
const theName = document.querySelector ("#name");
const theSubject = document.querySelector("#subject");
const theEmail = document.querySelector("#email");
const theMessage = document.querySelector("#message");
const theError = document.querySelector(".form-error");

function validateForm () {

event.preventDefault();

if (checkLength(theName.value, 5) === true) {
    nameError.style.display ="none";
}

else {
    nameError.style.display ="block";
}


if (checkLength(theSubject.value, 15) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

if (validateEmail(theEmail.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(theMessage.value, 25) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }


}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const matchesEmail = regEx.test(email);
    return matchesEmail;
  }

function checkLength (value, len) {
    if (value.trim().length > len) {
        return true;
    }

    else {
        return false;
    }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}