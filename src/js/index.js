 // 필요한 기능들: clear, appendNumber(num), selectOperation(operator), calculate, updateDisplay

const numberBtns = document.querySelectorAll('.digit');
const operationBtns = document.querySelectorAll('.operation');
const resetBtn = document.querySelector('.modifier');
const displayBoard = document.querySelector('#total');

let selectedNumbers = [];
let displayValue = 0;

const displayErrMsg = (showOnDisplay = false, errMsg) => {
  const errBoard = document.querySelector('#error-msg');
  showOnDisplay
  ? (errBoard.innerText = errMsg)
  : (errBoard.style.visibility = 'hidden');
}

//addEventListener로 click 이벤트 추가

const clear = () => {
};

const appendNumber = (num) => {
}

const selectOperation = (operator) => {}

const calculate = () => {}

const updateDisplay = () => {}

const init = () => {
  displayErrMsg();
}