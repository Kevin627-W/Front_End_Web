class Calculator {
    constructor() {
        this.screenValue = "";
        this.firstOperand = null;
        this.secondOperand = null;
        this.operator = null;
    }

    // Append a number or decimal point to the screen value
    appendNumber = (number) => {
        this.screenValue += number;
        this.updateScreen();
    };

    // Choose an operator and store the first operand
    chooseOperator = (operator) => {
        if (this.screenValue === '') return;
        this.firstOperand = parseFloat(this.screenValue);
        this.operator = operator;
        this.screenValue = '';
    };

    // Perform the calculation based on the operator
    calculate = () => {
        if (this.operator === null || this.screenValue === '') return;
        this.secondOperand = parseFloat(this.screenValue);
        const result = this.operate();
        this.screenValue = result;
        this.firstOperand = null;
        this.secondOperand = null;
        this.operator = null;
        this.updateScreen();
    };

    // Execute the operation based on the stored operator
    operate = () => {
        switch (this.operator) {
            case '+':
                return this.firstOperand + this.secondOperand;
            case '-':
                return this.firstOperand - this.secondOperand;
            case '*':
                return this.firstOperand * this.secondOperand;
            case '/':
                return this.firstOperand / this.secondOperand;
            default:
                return '';
        }
    };

    // Clear all values and update the screen
    clear = () => {
        this.screenValue = '';
        this.firstOperand = null;
        this.secondOperand = null;
        this.operator = null;
        this.updateScreen();
    };

    // Update the calculator screen
    updateScreen = () => {
        const screen = document.querySelector('.calculator-screen');
        if (screen) {
            screen.value = this.screenValue;
        }
    };
}

// Instantiate the calculator
const calculator = new Calculator();

// Add event listeners to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        if (!isNaN(value) || value === '.') {
            calculator.appendNumber(value);
        } else if (value === 'all-clear') {
            calculator.clear();
        } else if (value === '=') {
            calculator.calculate();
        } else {
            calculator.chooseOperator(value);
        }
    });
});
