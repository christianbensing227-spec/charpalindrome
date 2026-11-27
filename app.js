const firstNumber = document.getElementById("first-number");
const secondNumber = document.getElementById("second-number");
const result = document.getElementById("result");
const buttons = document.querySelectorAll("[data-operation]");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        const number1 = Number(firstNumber.value);
        const number2 = Number(secondNumber.value);
        const operation = button.dataset.operation;
        let answer;
        if (firstNumber.value === "" || secondNumber.value === "") {
            result.textContent = "Please enter both numbers";
            return;
        }
        if (operation === "add") {
            answer = number1 + number2;
        } else if (operation === "subtract") {
            answer = number1 - number2;
        } else if (operation === "multiply") {
            answer = number1 * number2;
        } else if (operation === "divide") {
            if (number2 === 0) {
                result.textContent = "Cannot divide by zero";
                return;
            }
            answer = number1 / number2;
        }
        result.textContent = "Result: " + answer;
    });
});
