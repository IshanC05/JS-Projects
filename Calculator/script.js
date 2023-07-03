var buttons = document.getElementsByClassName("buttons");
var display = document.getElementsByClassName("display-screen")[0];
var operand1 = null;
var operand2 = null;
var operator = null;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var value = this.getAttribute("data-value");

        if (value == "+" || value == "-" || value == "*" || value == "/" || value == "%") {
            operator = value;
            operand1 = parseFloat(display.textContent);
            display.textContent = "";
        } else if (value == "=") {
            if (operator && operand1 !== null && display.textContent !== "") {
                operand2 = parseFloat(display.textContent);
                var result = calculate(operand1, operator, operand2);
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        } else if (value == "AC") {
            display.textContent = "";
            operand1 = null;
            operand2 = null;
            operator = null;
        } else if (value == "-1") {
            var currentValue = parseFloat(display.textContent);
            display.textContent = -currentValue;
        } else {
            display.textContent += value;
        }
    });
}

function calculate(operand1, operator, operand2) {
    switch (operator) {
        case "+":
            return operand1 + operand2;
        case "-":
            return operand1 - operand2;
        case "*":
            return operand1 * operand2;
        case "/":
            return operand1 / operand2;
        case "%":
            return operand1 % operand2;
        default:
            return operand2;
    }
}
