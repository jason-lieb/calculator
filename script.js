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
let display = function() {
    
}