// initialize variables
let value1;
let value2;
let operator;
let complete = false;
// add function
let add = function (x, y) {
  return ((+x) + (+y)).toString();
}
// subtract function
let subtract = function (x, y) {
  return ((+x) - (+y)).toString();
}
// multiply function
let multiply = function (x, y) {
  return ((+x) * (+y)).toString();
}
// divide function
let divide = function (x, y) {
  return ((+x) / (+y)).toString();
}
// display function
let display = function(input) {
  let displayText = document.querySelector('.displayText');
  displayText.textContent = input;
}
// operate function
let operate = function(operator, x, y) {
  if (y === undefined) y = 0;
  if (operator === '+') {
    return add(x,y);
  } else if (operator === '-') {
    return subtract(x,y);
  } else if (operator === '*') {
    return multiply(x,y);
  } else if (operator === '/') {
    return y === '0' ? 'ERROR' : divide(x,y);
  };
}
// clear display function
let clearDisplay = function() {
  display('0');
  operator = undefined;
  value1 = undefined;
  value2 = undefined;
  complete = false;
}
// build number function
let buildNum = function(input) {
  if (complete === true) value1 = undefined;
  if (operator === undefined) {
    if (value1 === undefined) {
      if (input === '.') {
        value1 = '0.';
        display(value1);
      } else {
        value1 = input;
        display(value1);
      }
    } else if (input === '.' && value1.indexOf('.') !== -1) {
    } else {
      value1 += input;
      display(value1);
    }
  } else {
    if (value2 === undefined) {
      if (input === '.') {
        value2 = '0.';
        display(value2);
      } else {
        value2 = input;
        display(value2);
      }
    } else if (input === '.' && value2.indexOf('.') !== -1) {
    } else {
      value2 += input;
      display(value2);
    }
  }
  complete = false;
}
// total function
let triggerOperate = function(operatorButton) {
  if (operator === undefined) {
    operator = operatorButton;
  } else {
    let output;
    switch (operator) {
        case '+':
            output = operate('+', value1, value2);
            break;
        case '-':
            output = operate('-', value1, value2);
            break;
        case '*':
            output = operate('*', value1, value2);
            break;
        case '/':
            output = operate('/', value1, value2);
            break;
    }
    value1 = output;
    value2 = undefined;
    display(value1);
    if (operatorButton !== '=') {
      operator = operatorButton;
      complete = false;
    } else {
      operator = undefined;
      complete = true;
    }
  }   
}
// create event listeners for number buttons
let buttons = document.querySelectorAll('.number');
buttons.forEach((button) => {button.addEventListener('click', () => buildNum(button.textContent))});
// create event listner for operator buttons
let operators = document.querySelectorAll('.operator')
operators.forEach((operator) => {operator.addEventListener('click', () => triggerOperate(operator.textContent))});
// create event listener for clear button
document.querySelector('.clear').addEventListener('click', () => clearDisplay());