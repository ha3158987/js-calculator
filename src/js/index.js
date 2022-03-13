 // 필요한 기능들: clear, delete, appendNumber(num), selectOperation(operator), calculate, updateDisplay

const numberBtns = document.querySelectorAll('.digit');
const operationBtns = document.querySelectorAll('.operation');
const resetBtn = document.querySelector('.modifier');

let selectedNumbers = [];
let displayBoard = 0;

console.log("numberBtns:", numberBtns);
console.log("operationBtns:", operationBtns);
console.log("resetBtn:", resetBtn);

//addEventListener
