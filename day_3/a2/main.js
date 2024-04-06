// Inputs
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");

// buttons
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");

// Output
const output = document.querySelector("#output");

multiplyBtn.addEventListener("click", () => {
  output.innerHTML = Number(num1.value) * Number(num2.value);
});

divideBtn.addEventListener("click", () => {
  output.innerHTML = Number(num1.value) / Number(num2.value);
});
