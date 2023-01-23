const display = document.getElementById('display').getElementsByTagName('span')[0];
const eraseButton = document.getElementById('eraseButton');

let displayValue = '';
let operand1;
let symbol;
let isDecimal = false;
let newOperand = false;
let startNegative = false;

eraseButton.addEventListener('click', () => {
    if(displayValue.length == 2 && displayValue[0] == '-'){
        display.innerText = '0';
        displayValue = '';
    }
    else if(displayValue.length >= 1){
        displayValue = displayValue.slice(0, displayValue.length - 1);
        if(displayValue.length == 0)  display.innerText = '0';
        else display.innerText = displayValue;
    }
})

function modifyDisplayValue(n){
    if(!isDecimal && (display.innerText == '-0' || display.innerText == '0')){
        if(n != '0'){
            displayValue = (display.innerText[0] == '-'? '-' : '') + n;
        }
    }
    else if(newOperand) {
        displayValue = (startNegative? '-' : '') + n; 
        newOperand = false;
    }
    else {displayValue += n;}
    display.innerText = displayValue;
}

function turnDecimal(){
    if(!isDecimal){
        displayValue += '.';
        isDecimal = true;
        display.innerText = displayValue;
    }
}


function invertSign(){
    if(newOperand) {
        startNegative = true;
    } else {
        if(displayValue[0] == '-'){
            displayValue = displayValue.slice(1);
        } else {
            displayValue = '-' + (displayValue? displayValue : '0');
        } 
    }
    if(displayValue.length == 0) displayValue = '0';
        display.innerText = displayValue;
}

function prepareOperation(sym){
    symbol = sym;
    operand1 = Number(displayValue);
    newOperand = true;
    isDecimal = false;

}

function getResult(){
    if(symbol === 'sq') operand1 = Number(displayValue);
    let res = operate(symbol, operand1, Number(displayValue));
    displayValue = res.toString();
    if(displayValue.indexOf('.') != -1 && displayValue.length - displayValue.indexOf('.') > 4){
        displayValue = displayValue.slice(0, displayValue.indexOf('.') + 5);
    }
    display.innerText = displayValue;
    newOperand = false;
}

function clearValues(){
    displayValue = '';
    operand1;
    symbol;
    isDecimal = false;
    display.innerText = '0';
    newOperand = false;
}

