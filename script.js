let disInput = [];

const add = function(a,b) {
    let sum = a + b;
    return sum;
    
}

const subtract = function (c,d) {
    let diff = c - d;
    return diff;
}

const multiply = function(e,f) {
    let times = e * f;
    return times;
}

const divide = function(g,h) {
    let divis = g / h;
    return divis;
}

function operate(a, operator, b) {
    switch(operator) {
        case '+':
            return add(a,b)
            case '*':
                return multiply(a,b)
                case '-':
                    return subtract(a,b)
                    case '/':
                        return divide(a,b)
    }
};

function addDisplay(num) {
    let txt = document.getElementById("display").value;
    txt=txt + num;
    document.getElementById("display").value=txt;

}

function clearNum() {
  let txt = document.getElementById("display").value;
  txt=''
  document.getElementById("display").value=txt;

}