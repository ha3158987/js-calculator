export default class Display {
  constructor({displayValue}) {
    this.displayValue = null;
    this.setState(displayValue);
  }

  setState(displayValue) {
    this.displayValue = displayValue;
    this.render();
  }

  render() {
    const displayBoard = document.body.querySelector('#total');
    displayBoard.innerHTML = this.displayValue;
  }
}