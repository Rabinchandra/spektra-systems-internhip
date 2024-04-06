const form = document.querySelector("#form");

const textInputs = Array.from(form.querySelectorAll('[type="text"]'));
const numberInputs = Array.from(form.querySelectorAll('[type="number"]'));
const emailInput = form.querySelector("#email");
const radioInputs = Array.from(form.querySelectorAll('[name="radio-input"]'));

const result = {};

// console.log(form.querySelectorAll('[type="text"]'));

form.addEventListener("submit", (e) => {
  e.preventDefault();

  textInputs.forEach((input) => (result[input.name] = input.value));
  numberInputs.forEach((input) => (result[input.name] = input.value));
  result["email"] = emailInput.value;

  // Radio inputs
  radioInputs.forEach(
    (input) => input.checked && (result["payment"] = input.id)
  );

  alert(JSON.stringify(result, null, 2));
});
