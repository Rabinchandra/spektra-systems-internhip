const form = document.querySelector("#form");
const textInputs = Array.from(form.querySelectorAll('[type="text"]'));
const numberInputs = Array.from(form.querySelectorAll('[type="number"]'));
const emailInput = form.querySelector("#email");
const radioInputs = Array.from(form.querySelectorAll('[name="radio-input"]'));

const result = {};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  textInputs.forEach((input) => (result[input.name] = input.value));
  numberInputs.forEach((input) => (result[input.name] = input.value));
  result["email"] = emailInput.value;

  // Radio inputs
  radioInputs.forEach(
    (input) => input.checked && (result["radio-input"] = input.id)
  );

  alert(JSON.stringify(result));
});