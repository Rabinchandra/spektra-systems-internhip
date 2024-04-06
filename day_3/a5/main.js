const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const operator = document.querySelector("#select");
const output = document.querySelector("#output");
const calcBtn = document.querySelector("#calc-btn");

calcBtn.addEventListener("click", (e) => {
  const result = calculate(
    Number(num1.value),
    Number(num2.value),
    operator.value
  );

  if (result !== null) {
    output.innerHTML = result;
  }
});

function calculate(value1, value2, operator) {
  let result = null;

  switch (operator) {
    case "+":
      result = value1 + value2;
      break;
    case "-":
      result = value1 - value2;
      break;
    case "*":
      result = value1 * value2;
      break;
    case "/":
      result = value1 / value2;
      break;
    default:
      console.log("Invalid input");
  }

  return result;
}
