import Number from './Number.js';

export default class Numbers {
  constructor({maxNumber}) {
    this.state = null;
    // this.setState({maxNumber})
    this.max = maxNumber;
    this.numbers = Array.from({length: this.max}, (_, i) => i).reverse();
    this.setState();
  }

  setState(prev) {
    this.state = prev;
    this.render();
  }

  render() {
    const digitBox = document.querySelector('.digits');
    this.numbers.map((num) => new Number({number: num, target: digitBox}));
  }
}