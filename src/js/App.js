import Numbers from './components/Numbers.js';

class App {
  constructor () {
    this.currNum = '';
    this.selectedNumbers = [];
    this.selectedOperators = [];
    this.displayValue = 0;
    this.$numbers = new Numbers({maxNumber: 10})
  }

  setState() {

  }

  init() {
    // console.log(this.$numbers.render());
  }



}

new App();

