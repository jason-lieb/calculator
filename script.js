// initialize variables
let value1;
let value2;
let operator;
// add function
let add = function (x, y) {
  return ((+x) + (+y)).toString();
};
// subtract function
let subtract = function (x, y) {
  return ((+x) - (+y)).toString();
};
// multiply function
let multiply = function (x, y) {
  return ((+x) * (+y)).toString();
};
// divide function
let divide = function (x, y) {
  return ((+x) / (+y)).toString();
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
  displayText.textContent = input;
}
// clear display function
let clearDisplay = function() {
  display('0');
  operator = undefined;
  value1 = undefined;
  value2 = undefined;
}
// build number function
let buildNum = function(input) {
  if (operator === undefined) {
    if (value1 === undefined) {
      if (input === '.') {
        value1 = '0.';
        display(value1);
      } else {
        value1 = input;
        display(value1);
      }
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
    } else {
      value2 += input;
      display(value2);
    }
  }
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
    } else {
      operator = undefined;
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