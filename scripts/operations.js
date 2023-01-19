function add (summand1, summand2){
    return summand1 + summand2;
}

function subs (minuend, subtrahend){
    return minuend - subtrahend;
}

function mult (factor1, factor2){
    return factor1 * factor2;
}

function division (dividend, divisor){
    return dividend / divisorM
}

function expon (base, exponent) {
    return base ** exponent;
}

function sqroot(radicand) {
    return radicand ** 0.5;
}

function operate(operator, number1, number2) {
    switch (operator) {
        case '+':
            return add(number1, number2);
            break;
        case '-':
            return subs(number1, number2);
            break;
        case '*':
            return mult(number1, number2);
            break;
        case '/':
            return division(number1, number2);
            break;
        case '^':
            return expon(number1, number2);
            break;
        default:
            return sqroot(number1);
            break;
    }
}