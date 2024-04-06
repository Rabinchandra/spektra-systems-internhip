// Inputs
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const rePassword = document.querySelector("#re-password");

const form = document.forms[0];

// Message divs
const nameMsg = document.querySelector("#name-msg");
const emailMsg = document.querySelector("#email-msg");
const passwordMsg = document.querySelector("#password-msg");
const rePasswordMsg = document.querySelector("#repassword-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Event handlers
email.addEventListener("input", (e) => {
  validateEmail(e.target.value);
});

password.addEventListener("input", (e) => {
  validatePassword(e.target.value);
});

rePassword.addEventListener("input", (e) => {
  validateRepassword(e.target.value);
});

// Validators Functions
function validatePassword(input) {
  const errors = [];

  if (input.length < 8) {
    errors.push("Should be at least 8 characters");
  }

  // Check for capital letters
  if (!/[A-Z]/.test(input)) {
    errors.push("Should have at least one capital Letter");
  }

  // Clear the output
  passwordMsg.innerHTML = "";

  // Valid password
  if (errors.length === 0) {
    password.classList.remove("invalid");
    password.classList.add("valid");
  }
  
  //   Invalid Password
  else {
    password.classList.remove("valid");
    password.classList.add("invalid");

    errors.forEach((error) => {
      passwordMsg.innerHTML += `<div class="invalid">${error}</div>`;
    });
  }
}

function validateRepassword(input) {
  if (input !== password.value) {
    rePassword.classList.add("invalid");
    rePasswordMsg.innerHTML = `<div class="invalid">Password are not match</div>`;
  } else {
    rePassword.classList.remove("invalid");
    rePasswordMsg.innerHTML = "";
  }
}

function validateEmail(input) {
  // Assuming that there are some predefined emails
  const predefinedEmails = [
    "ram@gmail.com",
    "hanks@gmail.com",
    "james@gmail.com",
  ];

  // check if it's already defined
  if (predefinedEmails.indexOf(input) >= 0) {
    email.classList.add("invalid");
    emailMsg.innerHTML = `<div class="invalid">Email is already registered</div>`;
    return false;
  }
  // Check for length
  else if (input.length <= 5) {
    email.classList.add("invalid");
    emailMsg.innerHTML = `<div class="invalid">Email length should be more than 5</div>`;
    return false;
  } else if (input.indexOf("@") === -1) {
    email.classList.add("invalid");
    emailMsg.innerHTML = `<div class="invalid">Email have @ symbol</div>`;
  }
  //
  else {
    emailMsg.innerHTML = "";
    email.classList.remove("invalid");
    email.classList.add("valid");
  }
}
