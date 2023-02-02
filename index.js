function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function increment(n) {
    console.log(n++);
    return n;
}

function decrement(n) {
    console.log(n--);
    return n;
}

function makeInt(n) {
    parseInt(n.toString(), 10);
    return parseInt(n.toString(), 10);
}

function preserveDecimal(n) {
    parseFloat(n.toString());
    return parseFloat(n.toString());
}