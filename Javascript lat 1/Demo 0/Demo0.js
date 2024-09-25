function simpleCalculator (operator, num1, num2) {
    let result;
    switch(operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operator");
            return;
    }
    console.log(`Result of ${num1} ${operator} ${num2} is: ${result}`);
    alert(`Result is: ${result}`)
}
simpleCalculator("+",3,3);
