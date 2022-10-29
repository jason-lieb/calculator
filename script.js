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
    if (operator === 'add') {
        return add(x,y);
    } else if (operator === 'subtract') {
        return subtract(x,y);
    } else if (operator === 'multiply') {
        return multiply(x,y);
    } else if (operator === 'divide') {
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
    document.querySelector('.displayText').textContent = '0';
}
// create event listeners for buttons
let buttons = document.querySelectorAll('.button:not(.clear)');
buttons.forEach((button) => {button.addEventListener('click', () => display(button.textContent))});
// create event listener and function for clear button
document.querySelector('.clear').addEventListener('click', () => clearDisplay());