 // 필요한 기능들: clear, delete, appendNumber(num), selectOperation(operator), calculate, updateDisplay

const numberBtns = document.querySelectorAll('.digit');
const operationBtns = document.querySelectorAll('.operation');
const resetBtn = document.querySelector('.modifier');
const displayBoard = document.querySelector('#total');
const errBoard = document.querySelector('#error-msg');

let selectedNumbers = [];
let displayValue = 0;

errBoard.innerText = '헬로';

//addEventListener
