import Number from './Number.js';

export default class Numbers {
  constructor({maxNumber, onClick}) {
    this.max = maxNumber;
    this.handleNumberClick = onClick;
    this.numbers = Array.from({length: this.max}, (_, i) => i).reverse();
    this.setState();
  }

  setState() {
    this.render();
  }

  render() {
    const $digitBox = document.querySelector('.digits');
    $digitBox.innerHTML = "";
    this.numbers.map((num) => new Number({number: num, $target: $digitBox, onClick: this.handleNumberClick})); // 만든다.
  }
}