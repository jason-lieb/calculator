// initialize variables
let value1;
let value2;
let operator;
// add function
let add = function (x, y) {
    return x + y;
};
// subtract function
let subtract = function (x, y) {
    return x - y;
};
// multiply function
let multiply = function (x, y) {
    return x * y;
};
// divide function
let divide = function (x, y) {
    return x / y;
};
// operate function
let operate = function(operator, x, y) {
    if (operator === '+') {
        return add(x,y);
    } else if (operator === '-') {
        return subtract(x,y);
    } else if (operator === '*') {
        return multiply(x,y);
    } else if (operator === '/') {
        return divide(x,y);
    };
}
// display function
let display = function(input) {
    let displayText = document.querySelector('.displayText');
    let initialText = displayText.textContent;
    let insertText = '';
    initialText !== '0' ? insertText = initialText + input : insertText = input;
    displayText.textContent = insertText;
}
// clear display function
let clearDisplay = function() {
    console.log('clear');
    document.querySelector('.displayText').textContent = '0';
    operator = undefined;
    value1 = undefined;
    value2 = undefined;
}
// total function
let triggerOperate = function(operatorButton) {
  console.log('triggerOperate');
  if (value1 === undefined) {
    value1 = document.querySelector('.displayText').textContent;
    operator = operatorButton;
  } else {
    value2 = document.querySelector('.displayText').textContent;
    let output;
    switch (operator) {
        case '+':
            output = operate('+', value1[0], value2[0]);
            break;
        case '-':
            output = operate('-', value1[0], value2[0]);
            break;
        case '*':
            output = operate('*', value1[0], value2[0]);
            break;
        case '/':
            output = operate('/', value1[0], value2[0]);
            break;
    }
    document.querySelector('.displayText').textContent = output;
    if (operatorButton !== '=') {
      value1 = output;
      operator = operatorButton;
    }
  }   
}
// create event listeners for number buttons
let buttons = document.querySelectorAll('.number');
buttons.forEach((button) => {button.addEventListener('click', () => display(button.textContent))});
// create event listner for operator buttons
let operators = document.querySelectorAll('.operator')
operators.forEach((operator) => {operator.addEventListener('click', () => triggerOperate(operator.textContent))});
// create event listener for clear button
document.querySelector('.clear').addEventListener('click', () => clearDisplay());